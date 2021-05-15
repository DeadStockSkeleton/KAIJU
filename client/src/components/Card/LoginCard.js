import RegTabs from "../Tabs/RegTabs";
import React, { useState } from "react";
import script from "../utils/script";
import Login from "../pages/Login";
import { Link } from "react-router-dom";
import cn from "classnames";
function LoginCard() {
  const [emailQuery, setEmailQuery] = useState("");
  const [passQuery, setPassQuery] = useState("");
  
  function handleLogin(x, value) {
    switch (x) {
      case "email":
        
setEmailQuery(value)
        break;
      case "password":
        setPassQuery(value);
        

        break;
      default:
        return 0;
    }
  }

  function existingAccount() {
    script.Login(emailQuery, passQuery);
  }
  return (
    <>
      <div class="container text-center p-5">
          
        <form class="container signup-form">
            <h1 className="text-left display-4">Login</h1>
          <label class="form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center">
            <input
              id="emailInput"
              onKeyUp={(e) => handleLogin("email", e.target.value)}
              type="text"
              class="form-control text-dark signup-input input-sm"
              placeholder="example@email.com"
              autocapitalize="off"
              spellcheck="false"
              autocomplete="off"
            />
            

          </label>


          <label class="form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center">
            <input
              id="passwordInput"
              onKeyUp={(e) => handleLogin("password", e.target.value)}
              type="password"
              class="form-control text-dark signup-input input-sm"
              placeholder="Password"
              autocapitalize="off"
              spellcheck="false"
              autocomplete="off"
            />
            

          </label>
          <ul class="nav nav-pills mx-auto nav-fill">
              <li class="nav-item">
              <span
                onClick={() => existingAccount()}
                className="nav-link regActive px-5"
              >
                Login
              </span>
            </li><li class="nav-item">
              <Link to="/signup" className="nav-link">
                SignUp
              </Link>
            </li>
            
            
          </ul>
        </form>
      </div>
    </>
  );
}

export default LoginCard;