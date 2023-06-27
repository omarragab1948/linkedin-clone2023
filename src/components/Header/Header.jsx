import React, { useEffect } from "react";
import "./header.css";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser, setMode, resetMode } from "../../redux/actions/actions";
import { BiSun, BiMoon } from "react-icons/bi";
import { VscTriangleDown } from "react-icons/vsc";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const mode = useSelector((state) => state.mode.mode);
  const [signOut, setSignOut] = useState("none");
  function handleSignOut() {
    if (signOut === "none") {
      setSignOut("sign-out");
    } else {
      setSignOut("none");
    }
  }
  const signOutAPI = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
        dispatch(resetMode());
        navigate("/");
        const root = document.getElementById("root");
        root.classList.remove("dark-mode");
      })
      .catch((error) => alert(error.message));
  };

  const handleMode = (e) => {
    e.preventDefault();
    dispatch(setMode());
    const root = document.getElementById("root");
    root.classList.toggle("dark-mode");
  };

  return (
    <header className="bg-white dark:bg-main-dark-bg fixed w-full z-50">
      <div className="container p-2 m-auto flex justify-start md:justify-around items-center">
        <div className="flex justify-center items-center">
          <div>
            <a
              href="/home"
              className="text-sky-600 bg-white dark:text-white dark:bg-main-dark-bg dark:opacity-90 w-10 h-10 block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="44"
                height="42"
                focusable="false">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </div>
          <div className="search ml-2 relative">
            <input
              type="text"
              placeholder="Search"
              className="px-10 h-10 bg-input-bg border-none rounded text-black py-4 pr-4 md:hidden lg:block"
            />
            <span className="w-6 h-6 md:w-10 md:h-10 lg:w-6 lg:h-6  absolute md:relative lg:absolute md:block md:top-0 lg:top-2 top-2 left-1 m-0 ">
              <svg
                className="md:w-full md:h-full lg:w-6 lg:h-6 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                focusable="false">
                <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
              </svg>
            </span>
          </div>
        </div>
        <nav className="lg:w-2/3 md:w-full flex fixed md:relative dark:bg-main-dark-bg justify-center bottom-0 left-0 w-full md:justify-end z-50 bg-white">
          <ul className="flex items-center w-full justify-around">
            <li className="active text-black dark:hover:opacity-100 dark:text-white dark:opacity-70  dark:hover:text-white">
              <a className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li className="text-black opacity-60 hover:opacity-100 dark:text-white dark:opacity-70 dark:hover:opacity-100 dark:hover:text-white">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                <span>MY Network</span>
              </a>
            </li>
            <li className="text-black opacity-60 hover:opacity-100 dark:text-white dark:opacity-70 dark:hover:opacity-100 dark:hover:text-white">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                <span>Jobs</span>
              </a>
            </li>
            <li className="text-black opacity-60 hover:opacity-100 dark:text-white dark:opacity-70 dark:hover:opacity-100 dark:hover:text-white">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
                <span>Messaging</span>
              </a>
            </li>
            <li className="text-black opacity-60 hover:opacity-100 dark:text-white dark:opacity-70 dark:hover:opacity-100 dark:hover:text-white">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
                <span>Notifications</span>
              </a>
            </li>
            <li
              className="user relative cursor-pointer"
              onClick={handleSignOut}>
              <a>
                {user && user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt=""
                    className="rounded-full w-12 mx-auto"
                  />
                ) : (
                  <img
                    src="/images/user.svg"
                    alt=""
                    className="rounded-full w-12 mx-auto"
                  />
                )}
                <span className="down flex text-black opacity-60 hover:opacity-100 dark:text-white dark:opacity-70 dark:hover:opacity-100 dark:hover:text-white">
                  Me
                  <VscTriangleDown />
                </span>
              </a>
              <button onClick={signOutAPI} className={`${signOut} p-2`}>
                Sign Out
              </button>
            </li>
            <li className="hidden lg:block text-black opacity-60 hover:opacity-100 dark:text-white dark:opacity-70 dark:hover:opacity-100 dark:hover:text-white">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <span className="flex mt-2">
                  Work
                  <VscTriangleDown />
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="w-12 h-12 z-50 absolute md:relative right-2 sm:right-8 md:right-0">
          <button onClick={handleMode} className="w-full h-full">
            {mode ? (
              <BiSun className="w-full h-full" />
            ) : (
              <BiMoon className="w-full h-full" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
