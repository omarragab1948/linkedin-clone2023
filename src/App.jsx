import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Content from "./components/Content/Content";
import ReqAuth from "./redux/actions/ReqAuth";
import { useSelector } from "react-redux";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
const App = () => {
  const stateMode = useSelector((state) => state.mode.mode);
  console.log(stateMode);
  return (
    <div className={`app ${stateMode && "dark"}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
