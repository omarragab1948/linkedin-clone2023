import React from "react";
import "./PostModel.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { postArticleAPI } from "../../redux/actions";
import { Timestamp } from "firebase/firestore";
const PostModel = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [editorText, setEditorText] = useState("");
  const [srcImage, setSrcImage] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [imageShow, setImageShow] = useState(false);
  const [videoShow, setVideoShow] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  function handleImage(e) {
    const file = e.target.files[0];
    setSrcImage(file);
    const reader = new FileReader();
    reader.addEventListener("load", function (event) {
      const imageUrl = event.target.result;
      setImgUrl(imageUrl);
    });
    reader.readAsDataURL(file);
  }
  function handleVideo(e) {
    setVideoLink(e.target.value);
  }
  function reset() {
    props.handleClick(),
      setSrcImage(false),
      setVideoLink(""),
      setImageShow(false);
    setVideoShow(false);
    setImgUrl("");
    setEditorText("");
  }
  function handleShow(e) {
    if (e === "image") {
      setImageShow(true);
      setVideoShow(false);
      setVideoLink("");
    } else {
      setVideoShow(true);
      setImageShow(false);
      setSrcImage(false);
    }
  }
  const handlePostArticles = (e) => {
    e.preventDefault();
    reset();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: srcImage,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: Timestamp.now(),
    };
    dispatch(postArticleAPI(payload));
  };

  return (
    <>
      {props.showModel && (
        <div className="post overflow-auto p-2 fixed top-0 right-0 left-0 bottom-0">
          <div className="w-full max-w-xl dark:bg-main-dark-bg bg-white rounded-lg relative flex flex-col top-8 my-0 mx-auto ">
            <div className="header dark:text-white dark:opacity-90 py-4 px-3 text-base flex justify-between">
              <h2>Create a post</h2>
              <button onClick={reset} className="rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false">
                  <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col py-2 px-3">
              <div className="flex items-center py-3 pr-6">
                {user && user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt=""
                    className="rounded-full w-12 mr-2"
                  />
                ) : (
                  <img src="/images/user.svg" className="rounded-full w-12 mr-2" alt="" />
                )}
                <span className="font-semibold text-base leading-6 ml-2 dark:text-white dark:opacity-90">
                  {user.displayName}
                </span>
              </div>
              <textarea
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                placeholder="Whate do you want to talk about?"
                className="p-2 dark:text-white dark:opacity-90 bg-white dark:bg-gray-600"
              />
              <div className="my-2 text-center font-bold">
                {imageShow && (
                  <>
                    <input
                      type="file"
                      id="file"
                      className="image"
                      onChange={handleImage}
                    />
                    <p className="my-2">
                      <button className="label-btn dark:bg-white dark:opacity-70 dark:hover:bg-sky-600 dark:hover:opacity-100 dark:hover:text-white">
                        <label htmlFor="file">Select an image to share</label>
                      </button>
                    </p>
                    <img src={`${imgUrl}`} alt="" className="uploaded-image" />
                  </>
                )}
                {videoShow && (
                  <>
                    <input
                      type="text"
                      placeholder="Please input a video link "
                      value={videoLink}
                      className="py-1 px-2 my-2 w-fit text-center dark:text-white"
                      onChange={handleVideo}
                    />
                    {videoLink && (
                      <div className="vid-inp">
                        <ReactPlayer
                          url={videoLink}
                          width={`100%`}
                          max-height={`400px`}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between pb-2 pr-3">
              <div className="flex">
                <div className="flex ml-3 ">
                  <button
                    className="action p-1 dark:bg-white dark:opacity-60"
                    onClick={() => {
                      handleShow("image");
                    }}>
                    <img src="/images/share-image.svg" alt="" />
                  </button>
                  <button
                    className="action p-1 ml-1 dark:bg-white dark:opacity-60"
                    onClick={() => {
                      handleShow("video");
                    }}>
                    <img src="/images/share-video.svg" alt="" />
                  </button>
                </div>
                <div className="comment px-2 ml-3">
                  <button className="action flex items-center p-1 dark:bg-white dark:opacity-60">
                    <img
                      src="/images/share-comment.svg"
                      alt=""
                      className="mr-1"
                    />
                    Anyone
                  </button>
                </div>
              </div>
              <button
                disabled={!editorText && !srcImage && !videoLink ? true : false}
                className={`post-btn rounded-full px-4 ${
                  !editorText && !srcImage && !videoLink ? "d-bg" : "nd-bg"
                }`}
                onClick={(e) => {
                  handlePostArticles(e);
                }}>
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModel;
