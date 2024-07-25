// Data and Auth
import axios from 'axios';
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken } from 'ra-data-django-rest-framework';

const BASE_URL = "http://localhost:8000";
const AUTH_URL = "http://localhost:8000/api/api-token-auth/";
export const authProvider = tokenAuthProvider({
  obtainAuthTokenUrl: AUTH_URL
});
export const dataProvider = drfProvider(`${BASE_URL}/api`, fetchJsonWithAuthToken);

let client = {
    getList: function(resource, params) {
        return dataProvider.getList(resource, params);
    },
    getOne: function(resource, params) {
        return dataProvider.getOne(resource, params);
    },
    getMany: function(resource, params) {
        return dataProvider.getMany(resource, params);
    },
    getManyReference: function(resource, params) {
        return dataProvider.getManyReference(resource, params);
    },
    create: function(resource, params) {
        return dataProvider.create(resource, params);
    },
    update: function(resource, params) {
        return dataProvider.update(resource, params);
    },
    updateMany: function(resource, params) {
        return dataProvider.updateMany(resource, params);
    },
    delete: function(resource, params) {
        return dataProvider.delete(resource, params);
    },
    deleteMany: function(resource, params) {
        return dataProvider.deleteMany(resource, params);
    },
    monitorCompany: function(companyID) {
        return fetchJsonWithAuthToken(`${BASE_URL}/api/company-offical/${companyID}/monitor/`, { method: "GET" }).then(function(res) {
            return res.json();
        }).catch(function(err) {
            console.log(err);
        });
    },
    UnMonitorCompany: function(companyID) {
        return fetchJsonWithAuthToken(`${BASE_URL}/api/company-offical/${companyID}/unmonitor/`, { method: "GET" }).then(function(res) {
            return res.json();
        }).catch(function(err) {
            console.log(err);
        });
    }
};

export default client;
