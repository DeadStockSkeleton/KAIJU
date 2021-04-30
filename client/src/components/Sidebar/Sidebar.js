import '../../style.css';
import React from "react";
import { Link } from "react-router-dom";
import KaijuLogo from '../../assets/icons/KAIJU.svg'

function Sidebar() {
    return (
        <>
        <ul className="nav sidebar flex-column p-4 ">
        <li class="nav-item">
        </li>  
        <li class="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active text-light" : "nav-link text-light"}>
          Home
        </Link>
        </li>
        <li class="nav-item">
          <Link to="/discover" className={window.location.pathname === "/discover" ? "nav-link active text-light" : "nav-link text-light"}>
          <i class="far fa-compass px-3"></i>Discover
        </Link>
        </li>
        <li class="nav-item">
          <Link to="/favorites" className={window.location.pathname === "/favorites" ? "nav-link active text-light" : "nav-link text-light"}>
          <i class="far fa-heart px-3"></i>Favorites
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/downloads" className={window.location.pathname === "/downloads" ? "nav-link active text-light" : "nav-link text-light"}>
        <i class="far fa-file px-3"></i>Downloads
        </Link>
        </li>
      </ul>
      </>
    );
  }
  
  export default Sidebar;
  