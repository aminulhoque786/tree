import React from "react";
import map from "../assets/Maps.png";
const Maps = () => {
  return (
    <>
      <div className="max-w-container mx-auto ">
        <div className=" pt-10">
          <img src={map} alt="" />
        </div>
        <div className="bg-[red] flex p-5 items-center">
          <div className="font-bold text-[#fff] text-[25px] p-3 w-3/4">
            <h2 className=" lg:w-[930px]">
              Want to join as member branch in your area?
            </h2>
          </div>
          <div className=" ">
            <button className="bottom-4 left-10 bg-[#F40404] border-2 border-white p-2 text-white font-pops text-sm md:text-base hover:bg-[#2b9ec7] transition duration-700 ease-in-out">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maps;
