import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addUserAsync } from "../../slices/userSlice";
import "./signUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const createUser = { username, email, password };
    dispatch(addUserAsync(createUser)).then(() => {
      navigate("/home");
    });
  };

  return (
    <div id="signupCont">
      <div id="signupDiv">
        <form onSubmit={handleSubmit} id="signinForm">
          <h1 className="signTitle">Sign Up</h1>
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
          <p id="formP1">or use your email for registration</p>
          <input
            className="formInputs"
            type="text"
            required
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="formInputs"
            type="email"
            required
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="formInputs"
            type="text"
            required
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="formBtn" type="submit">
            SignUp
          </button>
        </form>
        <div id="signInArea">
          <h1 id="signInH">Welcome Back!</h1>
          <p id="signInP">To keep connected with us, please login!</p>
          <Link className="formBtn" id="signUpBtn" to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
