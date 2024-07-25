/* config-overrides.js */
const path = require('path');
const fs = require('fs');
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { useBabelRc, override, useEslintRc } = require('customize-cra');
const TerserPlugin = require('terser-webpack-plugin');

// Global Constants
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const myPaths = {
    appBuild: resolveApp('../assets/app_bundles/'),
    statsRoot: resolveApp('../'),
};
// Dev Paremeters
const devParams = {
    path: undefined,
    publicPath: 'http://localhost:3010/',
    statsFilename: 'webpack-stats-app.dev.json',
};

// Prod Paremeters
const prodParams = {
    path: myPaths.appBuild,
    publicPath: '/django-static/app_bundles/',
    statsFilename: 'webpack-stats-app.prod.json',
};

function createConfigOverride(config, { statsFilename, path, publicPath }) {
    const plugins = config.plugins;
    config.resolve.fallback = {
        url: false,
    }
    return {
        ...config,
        output: {
            ...config.output,
            path,
            publicPath,
        },
        plugins: [
            ...plugins,
            new BundleTracker({
                path: myPaths.statsRoot,
                filename: statsFilename,
            }),
        ],
        watch: true,
        watchOptions: {
            ignored: /node_modules/,
        },
        optimization: {
            ...config.optimization,
            // Workaround for CircleCI bug caused by the number of CPUs shown
            // https://github.com/facebook/create-react-app/issues/8320
            minimizer: config.optimization.minimizer.map((item) => {
                if (item instanceof TerserPlugin) {
                    item.options.parallel = 0;
                }

                return item;
            }),
        },
    };

}

module.exports = {
    webpack(config, env) {
        let configOveride = config;

        if (env === 'development') {
            configOveride = createConfigOverride(config, devParams);
        }

        if (env === 'production') {
            configOveride = createConfigOverride(config, prodParams);
        }

        return override(useBabelRc())(configOveride, env);
    },
    paths(paths, env) {
        return { ...paths, ...myPaths };
    },

}