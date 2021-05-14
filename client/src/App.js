import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import Community from './components/pages/Community';
import Code from './components/pages/Code';
import Navbar from './components/Navbar/Navbar';

function App(){
return (
      <Router>
        <Navbar />      
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        
          
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/community' component={Community}/>
        <Route exact path='/code' component={Code}/>
        
      </Router>
      
    );
    
  }
  
  export default App;
  