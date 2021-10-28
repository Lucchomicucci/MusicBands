import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home';
import { AuthProvider } from "./context/authcontext";
import { Login } from './components/login/login'
import { SignUp } from './components/signup/signup'
import { PrivateRoute } from "./components/privateRoute/privateRoute";
import { ListBands } from './components/listBands/listBands';
import { ListBandsByName } from './components/listBandsByName/listBandsByName';
import { InfoBand } from './components/infoBand/infoBand';
import './App.css'


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/"> <Home headerName="Welcome"/></PrivateRoute>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <PrivateRoute exact path="/genre/:genre" component={ListBands} />
            <PrivateRoute exact path="/band/:bandName" component={ListBandsByName} />
            <PrivateRoute exact path="/band/infoband/:infoband" component={InfoBand} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
