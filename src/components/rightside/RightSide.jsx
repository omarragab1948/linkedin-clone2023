import React from "react";
import "./rightside.css";
const RightSide = () => {
  return (
    <div className="basis-1/4">
      <div className="follow text-center overflow-hidden mb-2 bg-white dark:bg-main-dark-bg rounded-md relative border-0 p-3">
        <div className="title inline-flex items-center justify-between text-base w-full dark:text-white">
          <h2>Add to your feed</h2>
        </div>
        <ul className="mt-4">
          <li>
            <a>
              <div className="avatar"></div>
            </a>
            <div className="dark:text-white">
              <span>#Linkedin</span>
              <button className="dark:bg-white bg-black opacity-90">
                Follow
              </button>
            </div>
          </li>
          <li>
            <a>
              <div className="avatar"></div>
            </a>
            <div className="dark:text-white">
              <span>#Video</span>
              <button className="dark:bg-white bg-black opacity-90">
                Follow
              </button>
            </div>
          </li>
        </ul>
        <a className="rec flex items-center">
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </a>
      </div>
      <div>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default RightSide;
