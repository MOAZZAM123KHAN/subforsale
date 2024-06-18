// src/Components/Login.js
import React, { useState } from "react";
import { BiLogoGoogle } from "react-icons/bi";
import axios from "axios";
import Dashboard from "./Dashboard";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loginUser,logoutUser,updateName , updateEmail  ,setUserId  ,updatePhoneNumber
} from "../state/action-creators/userActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /// Using react redux here to update value using redux action-creators
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {loginState}= bindActionCreators(actionCreators,dispatch)
  const loginVerification = async (username, password) => {
    try {
      console.log(username + " " + password);
      // Call your login verification API here
      const REST_API_BASE_URL =
        "http://localhost:8080/users/login/" +
        username +
        "?password=" +
        password +
        "";
      const response = await axios.get(REST_API_BASE_URL);
      console.log("Login output:", response.data);
      // Handle login success
      if (response.data === true) {
        console.log("Login successful");
        // loginState(1);
        dispatch(loginUser());
        dispatch(setUserId(username));
        navigate('/dashboard');
        alert("Login successful");
        
      } else {
        console.log("Login failed");
        // loginState(0);
        alert("Login failed due to incorrect credentials!");
      }
    } catch (error) {
      // loginState(0);
      console.error("Login failed:", error);
      alert("Login failed due to server down!");
      // Handle login failure
    }
  };
  const handleLoginClick = () => {
    if(!username || !password){
      alert("Please fill in all required fields.");
      return;
    }
    loginVerification(username, password);
  };
  return (
    <div>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-bold text-slate-500">
              Sign In
            </p>
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            {/* <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label> */}
            <Link
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              to="/forgotPassword"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account?{" "}
            <Link
              className="text-red-600 hover:underline hover:underline-offset-4"
              to="/signUp"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
