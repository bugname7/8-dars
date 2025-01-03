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
      <aside className="fixed left-0 top-0 w-[310px] bg-[#000000] text-white h-full py-[30px] px-[23px] flex-shrink-0">
        <div>
          <div className="flex items-center gap-6 mt-1 cursor-pointer">
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
        <div className="mt-10 mb-10">
          <ul>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#" className="text-gray-400">
                Chill Mix
              </a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Insta Hits</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Your Top Songs 2021</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Mellow Songs</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Anime Lofi & Chillhop Music</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">BG Afro “Select” Vibes</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Afro “Select” Vibes</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Happy Hits!</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Deep Focus</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Instrumental Study</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">OST Compilations</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Nostalgia for old souled mill...</a>
            </li>
            <li className="mb-2 text-gray-400 hover:underline hover:text-gray-300">
              <a href="#">Mixed Feelings</a>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-grow relative ml-[310px] mr-[290px]">
        <div className="overflow-auto h-full">{children}</div>
      </main>

      <aside className="fixed right-0 top-0 w-[310px] bg-[#000000] text-white h-full py-[30px] px-[23px] flex-shrink-0">
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
          <button className="hover:bg-gray-300 bg-white text-[#171717] text-center items-center py-[12px] font-medium px-[65px] rounded-3xl">
            SETTINGS
          </button>
        </div>
      </aside>
    </div>
  );
}

export default MainLayout;
