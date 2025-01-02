import React from "react";
import user from "../images/user.png";
import likes from "../images/likes.svg";
import { Link, useNavigate } from "react-router-dom";

function MainLayout({ children }) {
  const navigate = useNavigate(); 
  function handleHome() {
    navigate("/");
  }

  return (
    <div className="flex h-[100vh]">
      <aside className="w-[310px] bg-[#000000] text-white h-[150vh] py-[30px] px-[23px]">
        <div>
          <div className="flex items-center gap-6 mt-8 cursor-pointer">
            <button onClick={handleHome}>
              <i className="fa-sharp fa-solid fa-house text-gray-400 text-2xl hover:text-white"></i>
            </button>
            <Link
              to={"/"}
              className="text-gray-400 font-medium hover:text-white"
            >
              Home
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-3 cursor-pointer">
            <button>
              <i className="fa-solid fa-magnifying-glass text-gray-400 text-2xl hover:text-white"></i>
            </button>
            <Link className="text-gray-400 font-medium hover:text-white">
              Search
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-3 cursor-pointer">
            <button>
              <i className="fa-solid fa-book text-gray-400 text-2xl hover:text-white"></i>
            </button>
            <Link className="text-gray-400 font-medium hover:text-white">
              Your Library
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-12 cursor-pointer">
            <button>
              <i className="fa-solid fa-square-plus text-2xl text-gray-400 hover:text-white"></i>
            </button>
            <Link className="text-gray-400 font-medium hover:text-white">
              Create Playlist
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-3 cursor-pointer">
            <Link to={"/likes"}>
              <img
                src={likes}
                alt="likes image"
                className="w-[20px] hover:text-white"
              />
            </Link>
            <Link
              to={"/likes"}
              className="font-medium text-gray-400 hover:text-white"
            >
              Liked Songs
            </Link>
          </div>
        </div>
      </aside>
      <main className="flex-grow relative">{children}</main>
      <aside className="w-[310px] bg-[#000000] text-white h-[150vh] py-[30px] px-[23px]">
        <div className="flex justify-between">
          <div>
            <h2 className="text-gray-400 text-[15px] font-bold tracking-[0.01em] cursor-pointer">
              Friend Activity
            </h2>
          </div>
          <div>
            <button>
              <i className="fa-solid fa-user-plus text-gray-400"></i>
            </button>
            <button className="ml-5">
              <i className="fa-solid fa-x text-gray-400"></i>
            </button>
          </div>
        </div>
        <div className="mt-[40px]">
          <p className="text-[#CCCCCC] mb-[25px] font-[450] leading-[24px] text-left decoration-skip-ink-none">
            Let friends and followers on Spotify see what you’re listening to.
          </p>
        </div>
        <div>
          <img
            src={user}
            alt="user image"
            className="w-[130px] cursor-pointer mb-[20px]"
          />
          <img
            src={user}
            alt="user image"
            className="w-[130px] cursor-pointer mb-[20px]"
          />
          <img
            src={user}
            alt="user image"
            className="w-[130px] cursor-pointer mb-[20px]"
          />
        </div>
        <div>
          <p className="text-[#CCCCCC] mb-[25px]">
            Go to Settings Social and enable “Share my listening activity on
            Spotify.” You can turn this off at any time.
          </p>
        </div>
        <div className="text-center">
          <button className="hover:bg-gray-300 bg-white text-[#171717] text-center items-center py-[12px]  font-medium px-[65px] rounded-3xl">
            SETTINGS
          </button>
        </div>
      </aside>
    </div>
  );
}

export default MainLayout;
