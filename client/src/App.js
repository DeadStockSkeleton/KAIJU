import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Project from './components/pages/Project';
import Dashboard from './components/pages/Dashboard';
import Community from './components/pages/Community';
import Code from './components/pages/Code';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/pages/PrivateRoute'
function App(){
return (
 
    <Router> 
      
        <Navbar />      
        <Switch>
        <Route exact path='/signup' component={SignUp}/>
        
        
        
          <Route exact path='/login' component={Login}/>  
        <PrivateRoute exact path='/' component={Dashboard}/>
        <PrivateRoute exact path='/projects' component={Project}/>
        <PrivateRoute exact path='/projects/:id/code' component={Code}/>
        <PrivateRoute exact path='/community' component={Community}/>
     </Switch>   
      </Router>
  
      
      
    );
    
  }
  
  export default App;
  