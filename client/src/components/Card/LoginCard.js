
import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify'
function LoginCard() {
  const [emailQuery, setEmailQuery] = useState(undefined);
  const [passQuery, setPassQuery] = useState(undefined);
  
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

  function existingAccount(e) {
    if (emailQuery && passQuery){
      try{
      
        fetch('/login', {
            method: "POST",
            body: JSON.stringify({ emailQuery, passQuery }),
            headers: { "Content-Type": "application/json" },
          }).then((res) => {
            if (res.status === 200) {
              localStorage.setItem('token', "token");
              toast.success("You're now Logged-In 🎉 ")
              return window.location.href = "/";
              
            }else{
              toast.error('Account Not Found! 🥲')
            }
            localStorage.removeItem('token');
            return 0;
          });
    
    }catch(err){
toast.error('Account Not Found! 🥲')
    }
    }else{
      toast.error('Password and/or Email is incorrect! 😭 ')

    }
    
    
  }
  return (
    <>
    <ToastContainer />
      <div class="container text-center p-5">
          
        <div class="container signup-form">
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
              autoComplete="off"
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
              autoComplete="off"
            />
            

          </label>
          <ul class="nav nav-pills mx-auto nav-fill">
              <li class="nav-item">
              <button
                onClick={(e) => existingAccount()}
                className="nav-link regActive px-5"
              >
                Login
              </button>
            </li><li class="nav-item">
              <Link to="/signup" className="nav-link">
                SignUp
              </Link>
            </li>
            
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default LoginCard;