import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
} from "react-admin";

import { CookiesProvider } from "react-cookie";

import dataProvider, { authProvider } from "./drfClient";
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import { MyLayout } from './components/Layout';
import { DailyUpdateCreate } from './pages/DailyUpdates/CreateDailyUpdate'


const App = () => (
  <CookiesProvider>
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
      layout={MyLayout}
      // loginPage={SignIn}
    >
      <Resource
        name="projects"
        list={ListGuesser}
        show={ShowGuesser}
        edit={EditGuesser}
      />
      <Resource
        name="updates"
        list={ListGuesser}
        show={ShowGuesser}
        edit={EditGuesser}
        create={DailyUpdateCreate}
      />
      <Resource
        name="tenats"
        list={ListGuesser}
        show={ShowGuesser}
        edit={EditGuesser}
      />
    </Admin>
  </CookiesProvider>
);

export default App;
