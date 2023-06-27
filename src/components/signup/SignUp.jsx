import React, { useState } from "react";
import logo from "/images/login-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser, setUserName } from "../../redux/actions/actions";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithPopup,
} from "firebase/auth";
const SignUp = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [er, setEr] = useState("");
  const handleInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const register = (e) => {
    e.preventDefault();

    if (
      userInfo.firstName &&
      userInfo.lastName &&
      userInfo.email &&
      userInfo.password
    ) {
      fetchSignInMethodsForEmail(auth, userInfo.email)
        .then((signInMethods) => {
          if (signInMethods.length > 0) {
            setEr("Email is already registered");
            return;
          }
          createUserWithEmailAndPassword(
            auth,
            userInfo.email,
            userInfo.password
          )
            .then(() => {
              navigate("/signin");
              dispatch(setUserName(userInfo.username));
            })
            .catch((error) => {
              if (error.code === "auth/email-already-in-use") {
                console.log("Your account has already been registered");
              } else {
                console.log("Error during registration:", error);
              }
            });
        })
        .catch((error) => {
          console.log("Error checking email existence:", error);
        });
    } else {
      setEr("Please Complete your Information");
    }
  };
  const signInAPI = () => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        navigate("/content");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="pt-8 d-flex flex-column justify-content-center h-screen bg-white">
      {er && (
        <div className="alert alert-info flex items-center justify-between  fixed mt-4 ml-2">
          <p className="m-0">{er}</p>
          <button onClick={() => setEr("")}>
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}
      <Link to="/" className="logo flex my-0 mx-auto w-1/4 md:w-1/6">
        <img src={logo} alt="" />
      </Link>
      <div className="signin-content  flex rounded-md flex-col w-4/5 sm:w-1/2 md:w-2/5 lg:w-1/4 mx-auto p-3 pt-4 mt-8">
        <div>
          <h2 className="mx-auto text-black font-semibold text-3xl">Sign Up</h2>
        </div>
        <form className="flex flex-col justify-center w-full mx-auto mt-3">
          <input
            type="text"
            name="firstName"
            className="bg-white text-black my-2 py-3 px-2 rounded-md border-1 border-solid border-gray-400"
            placeholder="First Name"
            onChange={handleInput}
          />
          <input
            type="text"
            name="lastName"
            className=" mb-2 text-black bg-white my-2 py-3 px-2 rounded-md border-1 border-solid border-gray-400"
            placeholder="Last Name"
            onChange={handleInput}
          />
          <input
            type="text"
            name="username"
            className=" mb-2 text-black bg-white my-2 py-3 px-2 rounded-md border-1 border-solid border-gray-400"
            placeholder="User Name"
            onChange={handleInput}
          />
          <input
            type="email"
            name="email"
            className=" mb-2 text-black bg-white my-2 py-3 px-2 rounded-md border-1 border-solid border-gray-400"
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            className=" mb-2 text-black bg-white my-2 py-3 px-2 rounded-md border-1 border-solid border-gray-400"
            placeholder="Password"
            onChange={handleInput}
          />
          <button
            className="signin w-full h-12 my-4 font-medium text-white rounded-full"
            onClick={register}>
            Sign Up
          </button>
        </form>
        <button
          onClick={signInAPI}
          className="flex font-bold my-3 border-1 border-solid border-gray-400 rounded-full mx-auto duration-300 w-full hover:bg-slate-200 text-gray-600 hover:text-black bg-white h-10 items-center justify-center">
          <img src="/images/google.svg" className="mr-2" alt="" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
