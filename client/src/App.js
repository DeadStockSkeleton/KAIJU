import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Project from './components/pages/Project';
import Code from './components/pages/Code';
import Navbar from './components/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast, Zoom, Bounce} from 'react-toastify'
import PrivateRoute from './components/pages/PrivateRoute'
function App(){

return (
 
    <Router>  
        <Navbar /> 
         
        <Switch>
          
        <Route exact path='/signup' component={SignUp}/>
        
        
        
          <Route exact path='/login' component={Login}/>  
        <PrivateRoute exact path='/' component={Project}/>
        <PrivateRoute exact path='/projects/:id/code' component={Code}/>
     </Switch>   
      </Router>
  
      
      
    );
    
  }
  
  export default App;
  