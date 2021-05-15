import React, { Component, PropTypes } from 'react';
import Script from '../utils/script';
import ProjectsLibrary from '../Projects/ProjectsLibrary';
class Dashboard extends Component {
  // componentDidMount(){
  //   console.log('dkas;ldoekd')
  //   Script.getDashboard().then((data) => {
  //     console.log(data.json())
  //   });
  
  // }
  render(){return (
          <>
          <ul class="nav nav-tabs">
  <li class="nav-item">
    <button className="nav-link active">Home</button>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <button>+</button>
  </li>
</ul>
          </>
          
        );}
    
        
      }
      
      export default Dashboard;