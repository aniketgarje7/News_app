import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Component/contactUs/contact';
import HomePage from './Component/homePage/home';
import NavBar from './Component/navBar';
import AboutUs from './Component/aboutUs/about';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


const  App= ()=> {
  return (
    
    <BrowserRouter>
    <NavBar/>
    <Switch>
     <Route exact path='/'><HomePage/></Route>
     <Route path='/contact'><Contact/></Route>
      <Route path='/home'> <HomePage/>  </Route>
      <Route path='/about'>  <AboutUs/> </Route>
     
     </Switch>
     </BrowserRouter>

  );
}

export default App;
