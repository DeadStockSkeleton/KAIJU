import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Discover from './components/pages/Discover';
import Favorites from './components/pages/Favorites';
import Downloads from './components/pages/Downloads';
function App() {
    return (
      <><Router>
      <Sidebar/>
      <div className="container">
        <Navbar/>
        <div className="container main p-4">
        
          <Route exact path='/' component={Home}/>
          <Route exact path='/discover' component={Discover}/>
          <Route exact path='/favorites' component={Favorites}/>
          <Route exact path='/downloads' component={Downloads}/>
        
        </div>
      </div>
      </Router>
      </>
      
    );
  }
  
  export default App;
  