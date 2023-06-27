import React from "react";
import "./main.css";
import PostModel from "../PostModel/PostModel";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { getArticlesAPI } from "../../redux/actions";
import ReactPlayer from "react-player";
import { SlLike } from "react-icons/sl";
import { BiRepost } from "react-icons/bi";
const Main = () => {
  const user = useSelector((state) => state.user.user);
  const userName = useSelector((state) => state.userName.userName);
  const loading = useSelector((state) => state.articleState.loading);
  const articles = useSelector((state) => state.articleState.articles);
  const dispatch = useDispatch();
  const [showModel, setShowModel] = useState(false);
  const handleClick = () => {
    setShowModel(!showModel);
  };
  useEffect(() => {
    dispatch(getArticlesAPI());
  }, []);
  return (
    <div className="main w-full basis-1/2 flex flex-col mr-4 mb-3 text-center overflow-hidden rounded-md relative border-0">
      <div className="bg-white dark:bg-main-dark-bg dark:text-white border-1 border-solid border-gray-300 rounded pt-2">
        <div className="content px-2 my-2">
          <div className="flex my-3">
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                alt=""
                className="rounded-full w-12 mr-2"
              />
            ) : (
              <img
                src="/images/user.svg"
                alt=""
                className="rounded-full w-12 mr-2"
              />
            )}
            <button
              onClick={handleClick}
              className="w-full text-left px-3 border-solid border-1 dark:border-white">
              Start a Post
            </button>
          </div>
          <div className="my-4">
            <button>
              <img src="/images/photo-icon.svg" />
              <span>Photo</span>
            </button>
            <button>
              <img src="/images/video-icon.svg" />
              <span>Video</span>
            </button>
            <button>
              <img src="/images/event-icon.svg" />
              <span>Event</span>
            </button>
            <button>
              <img src="/images/article-icon.svg" />
              <span>Write article</span>
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center my-2">
          <RotatingLines
            strokeColor="#0a66c2"
            strokeWidth="4"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        </div>
      ) : (
        ""
      )}
      {articles.length > 0 &&
        articles.map((article, index) => (
          <div
            key={index}
            className="mt-3 bg-white dark:bg-main-dark-bg p-2  rounded border-1 border-solid border-gray-300">
            <div className="">
              <div className="flex justify-between relative">
                <a className="flex items-center">
                  <img
                    src={`${article.actor.image || "/images/user.svg"}`}
                    className="w-12 h-12"
                  />
                  <div className="spans flex flex-col ml-2 text-xs dark:text-white">
                    <span className="font-extrabold">{`${
                      article.actor.title || userName
                    }`}</span>
                    <span className="font-semibold dark:text-white">
                      {article.actor.date.toDate().toLocaleDateString()}
                    </span>
                  </div>
                </a>
                <button className="my-auto border-0 absolute bottom-9 right-px hover:text-white hover:bg-gray-500 duration-300 hover:rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false">
                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                  </svg>
                </button>
              </div>
              <div className="description text-left text-sm my-2 text dark:text-white">
                {article.description}
              </div>
              <div>
                <a>
                  {!article.shareImg && article.video ? (
                    <ReactPlayer width="100%" url={article.video} />
                  ) : (
                    article.shareImg && (
                      <img src={article.shareImg} className="mx-auto" />
                    )
                  )}
                </a>
              </div>
              <ul className="flex items-center my-2">
                <li>
                  <button className="flex mr-2 py-1 px-2 items-center">
                    <img src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss" />
                    <img src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49" />
                    <span className="text-black dark:text-white">75</span>
                  </button>
                </li>
                <li>
                  <a className="text-black dark:text-white">2 comments</a>
                </li>
              </ul>
              <div className="actions flex items-start">
                <button className="h-8">
                  <SlLike className="w-5 h-5 items-center" />
                  <span className="dark:text-white">Like</span>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false">
                    <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                  </svg>
                  <span className="dark:text-white">Comment</span>
                </button>
                <button>
                  <BiRepost className="w-6 h-6 items-center" />
                  <span className="dark:text-white h-6 flex items-center">
                    Share
                  </span>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false">
                    <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                  </svg>{" "}
                  <span className="dark:text-white">Send</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      <PostModel showModel={showModel} handleClick={handleClick} />
    </div>
  );
};

export default Main;
