import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav } from './components/nav/nav';
import { AuthProvider } from "./context/authcontext";
import { Login } from './components/login/login'
import { SignUp } from './components/signup/signup'
import { PrivateRoute } from "./components/privateRoute/privateRoute";
import { ListBands } from './components/listBands/listBands';
import { ListBandsByName } from './components/listBandsByName/listBandsByName';
import { InfoBand } from './components/infoBand/infoBand';
import './App.css'
import { Home } from './components/home/home';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
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
