
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home';
import { AuthProvider } from "./context/authcontext";
import { Login } from './components/login/login'
import { SignUp } from './components/signup/signup'
import { PrivateRoute } from "./components/privateRoute/privateRoute";
import { ListBands } from './components/listBands/listBands';
import { ListBandsByName } from './components/listBandsByName/listBandsByName';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/genre/:genre" component={ListBands} />
            <Route exact path="/band/:bandName" component={ListBandsByName} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
