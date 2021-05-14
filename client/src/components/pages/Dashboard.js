import React, { Component, PropTypes } from 'react';
import Script from '../utils/script';
class Dashboard extends Component {
  componentDidMount(){
    console.log('dkas;ldoekd')
    Script.getDashboard().then((data) => {
      console.log(data.json())
    });
  
  }
  render(){return (
          <>
          <nav class="Dashboard section">
  <h1>Dashboard</h1>
</nav>
          </>
          
        );}
    
        
      }
      
      export default Dashboard;