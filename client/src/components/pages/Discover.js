import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from '../utils/API';
import AllMangasConatiner from '../AllMangasContainer/AllMangasContainer'
import DiscoverNav from '../DiscoverNav/DiscoverNav';
function Discover() {
    
  return (
    <>
        <DiscoverNav/>  
       
    
    <AllMangasConatiner />
    </>
  );
}

export default Discover;