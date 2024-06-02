import React, { useState } from "react";
import Header from "./Header";

const SignIn = () => {
  const [signUp, setSignUp] = useState(false);
  const SignUpForm = () => {
    setSignUp(!signUp);
  };
  return (
    <div className="">
      <Header />
      <div>
        <img
          className="fixed"
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="absolute text-white bg-black w-3/12 mx-auto my-36 right-0 p-8 left-0 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        {signUp && (
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 my-4 bg-gray-700 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full p-4 my-4 bg-gray-700 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700 rounded-sm"
        />
        <button className=" bg-red-700 hover:bg-red-800 px-10 p-4 w-full my-6 rounded-lg">
          {signUp ? "SIGN UP" : "SIGN IN"}
        </button>
        <p onClick={SignUpForm}>
          {signUp ? (
            <>
              Already a Member? Click here to{" "}
              <span className="underline cursor-pointer">Sign In</span>
            </>
          ) : (
            <>
              New Member? Click here to{" "}
              <span className="underline cursor-pointer">Sign Up</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
