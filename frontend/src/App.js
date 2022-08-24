import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BikeDetails from './pages/BikeDetails';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Index from './pages/Index';
import Profile from './pages/Profile';
import PageNotFound from './PageNotFound';
import Category from './components/Category';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/singleBike/:id?" component={BikeDetails}/>
        <Route path="/signUp" component={SignUp}/>  
        <Route path="/login" component={Login}/>  
        <Route path="/indexpage" component={Index}/>  
        <Route path="/profile" component={Profile}/>  
        <Route path="/category" component={Category}/>  
        <Route path="/*" component={PageNotFound}/>  
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
