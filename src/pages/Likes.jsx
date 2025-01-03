import React from "react";
import forwardL from "../images/forwardL.svg";
import forwardR from "../images/forwardR.svg";
import frame from "../images/frame.png";
import frame1 from "../images/frame1.png";
import group from "../images/group.png";
import download from "../images/download.png";
import play from "../images/play.svg";
import xs from "../images/xs.svg";
import clock from "../images/clock.svg";
import search from "../images/search.svg";
import options from "../images/options.svg";

function Likes() {
  return (
    <div className="h-[100vh] bg-slate-950">
      <div className="bg-custom-linear  px-[25px] flex flex-col  py-4">
        <div className="flex gap-3 mb-[50px] justify-between items-center">
          <div className="flex gap-5">
            <img
              src={forwardL}
              alt="forward left"
              className="cursor-pointer w-[30px] hover:scale-110 transition-all"
            />
            <img
              src={forwardR}
              alt="forward right"
              className="cursor-pointer w-[30px] hover:scale-110 transition-all"
            />
          </div>
          <div>
            <img src={frame1} alt="framea image " className="cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center  gap-6">
          <div className="relative">
            <img
              src={frame}
              alt="frame image"
              className="w-[250px] h-[250px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg"></div>
          </div>

          <div className="text-white text-center">
            <p className="  text-gray-200 mb-2 w-[10px]">PUBLIC PLAYLIST</p>
            <h2 className="text-7xl font-bold mb-2">Liked Songs</h2>
            <div className="flex items-center gap-3">
              <img
                src={group}
                alt="group icon"
                className="mt-12 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            src={play}
            alt="play image"
            className="w-[60px] cursor-pointer"
          />
          <img
            src={xs}
            alt="xs heart image "
            className="w-[45px] cursor-pointer"
          />
          <img
            src={download}
            alt="download image"
            className="w-[50px] cursor-pointer h-[50px]"
          />
          <img
            src={options}
            alt="options image"
            className="w-[40px] cursor-pointer"
          />
        </div>
        <div className="flex gap-4 mr-[30px] cursor-pointer ">
          <img src={search} alt="search image" className="w-[20px]" />
          <select className="bg-black text-gray-200 hover:outline-none hover:border-none border-none">
            <option>Custom order</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between text-center mt-5 px-3 border-b-2 pb-3 py-3">
        <div>
          <h2 className="text-gray-300"># TITLE</h2>
        </div>
        <div>
          <h2 className="text-gray-300">ALBUM</h2>
        </div>
        <div>
          <h2 className="text-gray-300">DATE ADDED </h2>
        </div>
        <div>
          <img src={clock} alt="clock image " className="mr-[40px]" />
        </div>
      </div>
    </div>
  );
}

export default Likes;
