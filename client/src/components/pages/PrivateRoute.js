import React, {useEffect, useState} from 'react'
import Script from '../utils/script'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = (props) => {
const isLoggedIn = localStorage.getItem('token');

return ( 
  isLoggedIn ? (<Route exact path={props.path} component={props.component}/>) : (<Redirect to="/login" />)
  );
}

export default PrivateRoute
