import RegTabs from "../Tabs/RegTabs";
import React, { useState } from "react";
import script from "../utils/script";
import SignUp from "../pages/SignUp";
import { Link } from "react-router-dom";
import cn from "classnames";
function SignUpCard() {
  const [emailQuery, setEmailQuery] = useState("");
  const [emailStatus, setEmailStatus] = useState("false");
  const [userQuery, setUserQuery] = useState("");
  const [userStatus, setUserStatus] = useState("false");
  const [passQuery, setPassQuery] = useState("");
  const [passStatus, setPassStatus] = useState("false");
  function verify(x, y) {
    switch (x) {
      case "email":
        if (y.includes("@") && y.length >= 5) {
          setEmailQuery(y);
          return setEmailStatus("valid");
        }
        setEmailStatus("wrong");

        break;
      case "username":
        if (y.length >= 5) {
          return setUserStatus("valid");
        }
        setUserStatus("wrong");

        break;
      case "password":
        if (y.length >= 8 && y.match(/[a-z]/g)) {
          return setPassStatus("valid");
        }
        setPassStatus("wrong");

        break;
      default:
        return 0;
    }
  }
  function handleSignUp(x, value) {
    switch (x) {
      case "email":
        if (value.length > 0) {
          verify("email", value);
        }

        break;
      case "username":
        setUserQuery(value);
        if (value.length > 0) {
          verify("username", value);
        }

        break;
      case "password":
        setPassQuery(value);
        if (value.length > 0) {
          verify("password", value);
        }

        break;
      default:
        return 0;
    }
  }

  function createAccount() {
    script.signUp(emailQuery, userQuery, passQuery);
  }
  return (
    <>
      <div class="container text-center p-5">
          
        <div class="container signup-form">
            <h1 className="text-left display-4">SignUp</h1>
          <label class="form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center">
            <input
              id="emailInput"
              onKeyUp={(e) => handleSignUp("email", e.target.value)}
              type="text"
              class="form-control text-dark signup-input input-sm"
              placeholder="example@email.com"
              autocapitalize="off"
              spellcheck="false"
              autocomplete="off"
            />
            <span class={emailStatus + " fw-light status"}>
              {emailStatus === "wrong" ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-check"></i>
              )}
            </span>

          </label>

          <label class="form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center">
            <input
              id="usernameInput"
              onKeyUp={(e) => handleSignUp("username", e.target.value)}
              type="text"
              class="form-control text-dark signup-input input-sm"
              placeholder="Username"
              autocapitalize="off"
              spellcheck="false"
              autocomplete="off"
            />
            <span class={userStatus + " fw-light status"}>
              {userStatus === "wrong" ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-check"></i>
              )}
            </span>

          </label>

          <label class="form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center">
            <input
              id="passwordInput"
              onKeyUp={(e) => handleSignUp("password", e.target.value)}
              type="password"
              class="form-control text-dark signup-input input-sm"
              placeholder="Password"
              autocapitalize="off"
              spellcheck="false"
              autocomplete="off"
            />
            <span class={passStatus + " fw-light status"}>
              {passStatus === "wrong" ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-check"></i>
              )}
            </span>

          </label>
          <ul class="nav nav-pills mx-auto nav-fill"><li class="nav-item">
              <span
                onClick={() => createAccount()}
                className="nav-link regActive px-5"
              >
                SignUp
              </span>
            </li>
              <li class="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default SignUpCard;
