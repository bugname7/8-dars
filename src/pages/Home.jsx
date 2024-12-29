import React from "react";
import cover from "../images/cover.png";
import forwardL from "../images/forwardL.svg";
import forwardR from "../images/forwardR.svg";

function Home() {
  return (
    <div>
      <div className=" bg-custom-linear h-[50vh]   px-[25px] ">
        <div className="flex gap-4 pt-5 mb-[50px]">
          <img
            src={forwardL}
            alt="forward image"
            className="cursor-pointer w-[30px] hover:scale-105"
          />
          <img
            src={forwardR}
            alt="forward image"
            className="cursor-pointer w-[30px] hover:scale-105"
          />
        </div>
        <div className="">
          <h2 className="text-white font-medium text-4xl">Good afternoon</h2>
        </div>

        <div className="flex gap-[32px] mt-5  ">
          <div className="left ">
            <div className="flex gap-5 items-center  bg-gray-400 bg-opacity-20 w-[450px] rounded-md mb-3 cursor-pointer">
              <img src={cover} alt="Cover Image" className="w-[60px]" />
              <h2 className="text-white font-medium">Chill Mix</h2>
            </div>
            <div className="flex gap-5 items-center  bg-gray-400 bg-opacity-20 w-[450px] rounded-md mb-3 cursor-pointer">
              <img src={cover} alt="Cover Image" className="w-[60px]" />
              <h2 className="text-white font-medium">Chill Mix</h2>
            </div>
            <div className="flex gap-5 items-center  bg-gray-400 bg-opacity-20 w-[450px] rounded-md mb-5 cursor-pointer">
              <img src={cover} alt="Cover Image" className="w-[60px]" />
              <h2 className="text-white font-medium">Chill Mix</h2>
            </div>
          </div>
          <div className="left ">
            <div className="flex gap-5 items-center  bg-gray-400 bg-opacity-20 w-[450px] rounded-md mb-3 cursor-pointer">
              <img src={cover} alt="Cover Image" className="w-[60px]" />
              <h2 className="text-white font-medium">Chill Mix</h2>
            </div>
            <div className="flex gap-5 items-center  bg-gray-400 bg-opacity-20 w-[450px] rounded-md mb-3 cursor-pointer">
              <img src={cover} alt="Cover Image" className="w-[60px]" />
              <h2 className="text-white font-medium">Chill Mix</h2>
            </div>
            <div className="flex gap-5 items-center  bg-gray-400 bg-opacity-20 w-[450px] rounded-md mb-5 cursor-pointer">
              <img src={cover} alt="Cover Image" className="w-[60px]" />
              <h2 className="text-white font-medium">Chill Mix</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[50vh] px-[25px] pt-5">
        <div className="flex justify-between">
          <h2 className="text-white">Your top mixes</h2>
          <p className="text-gray-300 hover:underline">SEE ALL</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
