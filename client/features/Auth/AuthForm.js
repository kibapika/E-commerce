import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { authenticate } from "../../app/store";
import "./authForm.css";

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.me);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
    navigate("/home");
  };

  return (
    <div id="loginCont">
      <div id="logInDiv">
        <form onSubmit={handleSubmit} name={name} id="loginForm">
          <h1 className="logTitle">Sign in</h1>
          <div id="socialIconsDiv">
            <a className="socialIcons">
              <FaFacebookF />
            </a>
            <a className="socialIcons">
              <FaGoogle />
            </a>
            <a className="socialIcons">
              <FaApple />
            </a>
          </div>
          <p id="formP1">or use your account</p>
          <input
            className="formInputs"
            name="username"
            type="text"
            placeholder="Username"
            required
          />

          <input
            className="formInputs"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <a id="formA">Forgot your password?</a>
          <button className="formBtn" type="submit">
            {displayName}
          </button>
        </form>
        <div id="signUpArea">
          <h1 id="signUpH">Hello, Friend!</h1>
          <p id="signUpP">
            Join our family to keep connected for alerts and deals!
          </p>
          <Link className="formBtn" id="signUpBtn" to="/signup">
            Sign Up
          </Link>
        </div>

        {error && error.response && <div> {error.response.data} </div>}
      </div>
    </div>
  );
};

export default AuthForm;
