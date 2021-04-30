import '../../style.css';
import React from "react";
import Account from '../Account/Account'

function Navbar() {
    return (
        <>
        <nav className="navbar p-3">
                <input autoComplete="off" type="search" placeholder="search" id="search" className="form-control px-4 text-light rounded-pill mx-auto w-50"/>
                <Account/>
        </nav>
      </>
    );
  }
  
  export default Navbar;