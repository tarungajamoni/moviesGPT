import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute flex w-screen justify-between z-10 p-3 bg-gradient-to-b from-black">
      <img
        alt="logo"
        src="https://i.pinimg.com/736x/a9/91/94/a99194ad857e6ad7a1e0be1c50a678d4.jpg"
        className="h-16 w-32"
      />
      {user && (
        <div className="flex">
          <img className="h-10 w-10" alt="usericon" src={user?.photoURL} />
          <button className="text-red-700" onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
