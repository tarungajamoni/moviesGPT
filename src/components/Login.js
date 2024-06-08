import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const SignUpForm = () => {
    setSignUp(!signUp);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const response = validate(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(response);
    if (response) return;
    if (signUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL:
              "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-43518,resizemode-75,msid-104750685/magazines/panache/i-do-have-a-phone-but-i-use-it-only-to-set-an-alarm-at-night-ms-dhoni-says-spending-too-much-time-on-social-media-affects-people.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />
      {/* background image */}
      <div>
        <img
          className="fixed"
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      {/* login/logout form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white bg-black w-3/12 mx-auto my-36 right-0 p-8 left-0 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        {signUp && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="w-full p-4 my-4 bg-gray-700 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-full p-4 my-4 bg-gray-700 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700 rounded-sm"
        />
        <p className="text-red-500 font-semibold text-lg">{errorMessage}</p>
        <button
          className=" bg-red-700 hover:bg-red-800 px-10 p-4 w-full my-6 rounded-lg"
          onClick={handleButtonClick}>
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
