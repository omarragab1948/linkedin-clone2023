import React, { useEffect } from "react";
import "./content.css";
import LeftSide from "../leftside/LeftSide";
import Main from "../main/Main";
import RightSide from "../rightside/RightSide";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { setUser, setMode } from "../../redux/actions/actions";
const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
      }
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto pt-6 px-2 min-h-screen">
        <section className="flex justify-center flex-col sm:flex-row mt-16 md:mt-24">
          <h5 className="underline font-bold mr-2 md:text-base text-sm text-center">
            <a href="">Hiring in a hurry? </a>
          </h5>
          <p className="underline dark:text-white dark:opacity-90 text-black font-bold md:text-base text-sm text-center">
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </section>
        <section className="flex flex-col md:flex-row mt-6">
          <LeftSide />
          <Main />
          <RightSide />
        </section>
      </div>
    </>
  );
};

export default Content;
