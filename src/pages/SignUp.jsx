// src/Components/Login.js
import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoGoogle } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [fullname, setFullName] = useState("");
  const [moNumber, setMoNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sponsorId, setSponsorId] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async () => {
    console.log("handle sign up");
    if (!fullname || !moNumber || !email || !password || !sponsorId) {
      alert("Please fill in all required fields.");
      return; // Exit early if any required field is empty
    }
    if(sponsorId.length !== 6){
      alert('The sponsor ID must be exactly 6 characters long');
      return;
    }
    console.log(
      fullname + " " + moNumber + " " + email + " " + password + " " + sponsorId
    );
    try {
      const REST_API_BASE_URL = "http://localhost:8080/users/signup";
      const response = await axios.post(REST_API_BASE_URL, {
        column1: fullname,
        column2: moNumber,
        column3: email,
        column4: password,
        column5: sponsorId,
      });
      console.log("Login output:", response.data);
      if (response.data === 1) {
        navigate("/login");
        alert("Signup completed! Please login to continue.");
      } else {
        alert("Failed to sign up! with response code : " + response.data);
      }
    } catch (error) {
      console.error("SignUp failed:", error);
      alert("Signup failed due to some issues!");
    }
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center  font-bold text-slate-500">
            Sign Up
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Mobile Number"
          value={moNumber}
          onChange={(e) => setMoNumber(e.target.value)}
          required
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded  mt-4"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Sponsor Id"
          value={sponsorId}
          onChange={(e) => setSponsorId(e.target.value.toUpperCase())}
          pattern="\d{6}" // Specify the pattern for exactly 6 digits
          title="Please enter exactly 6 digits" // Error message title
          maxLength={6} // Limit input to 6 characters visually
          required // Make the input required
        />
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
