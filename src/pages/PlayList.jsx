import React from "react";
import { useLocation } from "react-router-dom";
import forwardL from "../images/forwardL.svg";
import forwardR from "../images/forwardR.svg";

function PlayList() {
  return (
    <div>
      <div className="bg-custom-linear h-[50vh] px-[25px] flex flex-col justify-center">
        <div className="flex gap-4 pt-5 mb-[30px] ">
          <img
            src={forwardL}
            alt="forward left"
            className="cursor-pointer w-[30px] hover:scale-105"
          />
          <img
            src={forwardR}
            alt="forward right"
            className="cursor-pointer w-[30px] hover:scale-105"
          />
        </div>
        <h2 className="text-white font-medium text-4xl">Good afternoon</h2>

        <div className="flex gap-[24px] mt-6 ">
          <div className="space-y-2">
            <div
              className="flex gap-4 items-center  bg-gray-400 bg-opacity-20 w-[420px] rounded-md 
               cursor-pointer"
            >
              <img
                src={cover}
                alt="Chill Mix"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Chill Mix</h2>
            </div>
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md  cursor-pointer">
              <img
                src={daily}
                alt="Daily Mix 1"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Daily Mix 1</h2>
            </div>
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md  cursor-pointer">
              <img
                src={folk}
                alt="Folk & Acoustic Mix"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Folk & Acoustic Mix</h2>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md  cursor-pointer">
              <img src={pop} alt="Pop Mix" className="w-[60px] rounded-md" />
              <h2 className="text-white font-medium">Pop Mix</h2>
            </div>
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md cursor-pointer">
              <img
                src={daily5}
                alt="Daily Mix 5"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Daily Mix 5</h2>
            </div>
            <div className=" flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md  cursor-pointer">
              <img
                src={daily4}
                alt="Daily Mix 4"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Daily Mix 4</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayList;
