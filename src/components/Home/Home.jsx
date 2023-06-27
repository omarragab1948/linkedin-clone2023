import React from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useEffect } from "react";
import { setUser } from "../../redux/actions/actions";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInAPI = () => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        navigate("/content");
      })
      .catch((error) => alert(error.message));
  };
  useEffect(() => {
    const getUserAuth = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(user));
        } else {
        }
      });
    };
    getUserAuth();
  }, []);

  return (
    <>
      <nav className=" container flex justify-between items-center mx-auto my-5 px-2 lg:px-0 xl:px-16">
        <a href="/" className="w-24 sm:w-44 lg:ml-14">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div className="sm:w-3/4 flex justify-end">
          <Link
            to="/signup"
            className="font-bold mr-2 px-4 py-3 sm:px-8 sm:py-6 rounded-full text-sm  sm:text-xl lg:mr-8">
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="sm:mx-7 font-bold px-4 py-3 sm:px-10 sm:py-6 rounded-full text-sm sm:text-xl lg:mr-4">
            Sign in
          </Link>
        </div>
      </nav>
      <section className="container mx-auto lg:px-0 xl:px-16 mt-32">
        <div className="flex m-auto justify-start flex-col md:flex-row">
          <div>
            <h1 className="text-3xl ml-2 sm:text-5xl lg:ml-14">
              Welcome to your professional community
            </h1>
            <div className="items-center rounded-full  mt-16 sm:mt-10 md:mt-20 lg:mt-28 mx-auto w-2/3">
              <button
                onClick={signInAPI}
                className="flex font-bold rounded-full mx-auto duration-300 w-full hover:bg-slate-200 text-gray-600 hover:text-black bg-white h-14 items-center justify-center">
                <img src="/images/google.svg" className="mr-2" alt="" />
                Sign in with Google
              </button>
            </div>
          </div>
          <img
            src="/images/login-hero.svg"
            className="w-1/2 mx-auto mt-14"
            alt=""
          />
        </div>
      </section>
    </>
  );
};
export default Home;
