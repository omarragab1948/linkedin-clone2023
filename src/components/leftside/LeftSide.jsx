import React from "react";
import "./leftside.css";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const LeftSide = () => {
  const user = useSelector((state) => state.user.user);
  const userName = useSelector((state) => state.userName.userName);
  console.log(userName);
  console.log(user.displayName);

  return (
    <div className="left basis-1/4 mb-2 md:mr-6">
      <div className="text-center bg-white dark:bg-main-dark-bg overflow-hidden relative rounded border-none">
        <div className="userinfo">
          <div className="user-card"></div>
          <a>
            <div className="photo shadow-none rounded-full bg-white bg-center box-border bg-clip-content bg-no-repeat"></div>
            <div className="font-semibold text-base leading-normal text-black dark:text-white opacity-90">
              <h3>{user.displayName || userName}</h3>
            </div>
          </a>
          <a>
            <div className="font-normal text-xs leading-snug mt-1">
              Add a photo
            </div>
          </a>
        </div>
        <div className="widget py-3">
          <a className="flex justify-between px-2">
            <div className="flex flex-col text-start text-xs leading-snug">
              <span className="dark:text-white dark:opacity-60 text-black ">
                Connections
              </span>
              <span className="text-black dark:text-white opacity-90">
                Grow your network
              </span>
            </div>
            <span className="dark:text-white text-black">10</span>
          </a>
        </div>
        <div className="item py-3 pl-1 text-start">
          <span className="flex text-xs text-black dark:text-white dark:opacity-90 items-center">
            <BsFillBookmarkFill className="mr-2 text-black dark:text-white dark:opacity-60" />
            My Items
          </span>
        </div>
        <div className="community flex flex-col items-start">
          <a className="my-1">
            <span className="flex">Groups</span>
          </a>
          <a className="my-1">
            <span className="flex justify-between">
              Events
              <svg
                className="dark:text-white text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                class="mercado-match"
                width="16"
                height="16"
                focusable="false">
                <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
              </svg>
            </span>
          </a>
          <a className="my-1">
            <span className="flex">Follow Hashtags</span>
          </a>
          <a>
            <span className="dark:text-white dark:opacity-90 h-10 flex justify-center text-center items-center">
              Discover more
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
