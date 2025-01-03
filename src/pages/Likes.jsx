import React from "react";
import forwardL from "../images/forwardL.svg";
import forwardR from "../images/forwardR.svg";
import frame from "../images/frame.png";
import frame1 from "../images/frame1.png";
import group from "../images/group.png";

function Likes() {
  return (
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
            <img src={group} alt="group icon" className="mt-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Likes;
