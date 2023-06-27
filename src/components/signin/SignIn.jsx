import React, { useEffect, useState } from "react";
import logo from "/images/login-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { updateProfile } from "firebase/auth";
import "./signin.css";
import { setUser } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

const SignIn = () => {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [er, setEr] = useState("");
  const handleInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    if (userInfo.email && userInfo.password) {
      signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((a) => {
          navigate("/content");
          setUser(a.user);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setEr("Please Enter your Email & Password");
    }
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
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
      <div className="signin-content flex rounded-md flex-col w-4/5 sm:w-1/2 md:w-2/5 lg:w-1/4 mx-auto p-3 pt-4 mt-8">
        <div>
          <h2 className="mx-auto text-black font-semibold text-3xl">Sign in</h2>
        </div>
        <form className="flex flex-col justify-center w-full mx-auto mt-3">
          <input
            type="email"
            name="email"
            className="bg-white text-black my-2 py-3 px-2 rounded-md border-1 border-solid border-gray-400"
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
          <label className="text-sky-600 text-md mt-2">Forgot password?</label>
          <button
            className="signin w-full h-12 my-4 font-medium text-white rounded-full"
            onClick={handleSignIn}>
            Sign In
          </button>
        </form>
        <button
          onClick={signInAPI}
          className="flex font-bold my-3 border-1 border-solid border-gray-400 rounded-full mx-auto duration-300 w-full hover:bg-slate-200 text-gray-600 hover:text-black bg-white h-10 items-center justify-center">
          <img src="/images/google.svg" className="mr-2" alt="" />
          Sign in with Google
        </button>
        <div className="flex justify-center">
          <p className="text-black my-1">
            New to LinkedIn?
            <Link to="/signup" className="color mx-1">
              Join now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
