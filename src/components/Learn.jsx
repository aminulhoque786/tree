import React from "react";
import uno from "../assets/uno.png";
import logo from "../assets/Logo1.png";
import logo1 from "../assets/Logo2.png";
import logo2 from "../assets/Logo3.png";
import logo3 from "../assets/Logo4.png";
import uio from "../assets/Group 1.png";
import uion from "../assets/Group 2.png";
import uiov from "../assets/Group 3.png";
import { IoIosArrowForward } from "react-icons/io";
const Learn = () => {
  return (
    <>
      <div className="bg-[#F0F0F0]">
        <div className="max-w-container mx-auto pt-9 items-center w-1/2 flex pb-9 ">
          <div className=" lg:w-1/4 w-1/2 bg-[#F40404] lg:p-[15px] p-[10px]">
            <h2 className="text-[#fff] font-pops font-bold lg:text-[26px] text-[7px] ">
              Learn more about our company
            </h2>
          </div>

          <div className="relative lg:w-3/4 w-3/4  ">
            <img src={uno} alt="" />
            <button className="absolute font-bold top-4 p-0 text-[5px] left-10 lg:top-[120px] lg:left-[160px] bg-[#ffffff] lg:p-2 text-[red] font-pops text-sm md:text-base hover:bg-[#9be541] transition duration-700 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto flex gap-2 p-3">
        <div className="lg:w-1/4 w-1/4">
          <img src={logo} alt="" />
        </div>
        <div className="w-1/4">
          <img src={logo1} alt="" />
        </div>
        <div className="w-1/4">
          <img src={logo2} alt="" />
        </div>
        <div className="w-1/4">
          <img src={logo3} alt="" />
        </div>
      </div>
      <div className=" max-w-container mx-auto flex gap-4">
        <div className="w-1/3 relative">
          <img src={uio} alt="" />
          <h2 className="lg:w-[249px]  w-[100px] absolute lg:top-[40px] lg:left-0 font-pops font-bold  text-[10px] left-2 top-2 lg:text-[26px] text-[#FFFFFF] lg:p-6">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod.
          </h2>
          <button className="absolute font-bold left-5 top-[100px] lg:top-[324px] lg:left-[24px] bg-[#b0a3a3] py-1 px-3 lg:px-10 lg:py-1 text-[10px] text-[white] lg:text-[white] font-pops text-sm md:text-base hover:bg-[#108ba3] transition duration-700 ease-in-out">
            Read
          </button>
        </div>
        <div className="w-1/3 relative">
          <img src={uion} alt="" />
          <h2 className="lg:w-[249px]  w-[100px] absolute lg:top-[40px] lg:left-0 font-pops font-bold  text-[10px] left-2 top-2 lg:text-[26px] text-[#FFFFFF] lg:p-6">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod.
          </h2>
          <button className="absolute font-bold left-5 top-[100px] lg:top-[324px] lg:left-[24px] bg-[#b0a3a3] py-1 px-3 lg:px-10 lg:py-1 text-[10px] text-[white] lg:text-[white] font-pops text-sm md:text-base hover:bg-[#108ba3] transition duration-700 ease-in-out">
            Read
          </button>
        </div>
        <div className="w-1/3 relative">
          <img src={uiov} alt="" />
          <h2 className="lg:w-[249px]  w-[100px] absolute lg:top-[40px] lg:left-0 font-pops font-bold  text-[10px] left-2 top-2 lg:text-[26px] text-[#FFFFFF] lg:p-6">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod.
          </h2>
          <button className="absolute font-bold left-5 top-[100px] lg:top-[324px] lg:left-[24px] bg-[#b0a3a3] py-1 px-3 lg:px-10 lg:py-1 text-[10px] text-[white] lg:text-[white] font-pops text-sm md:text-base hover:bg-[#108ba3] transition duration-700 ease-in-out">
            Read
          </button>
        </div>
      </div>
      <div className="max-w-container mx-auto pl-[100px]  lg:pl-[800px] flex items-center pt-4">
        <h3
          className="font-bold"
          style={{
            textShadow: "2px 2px 9px rgba(0, 0, 0, 0.3)",
            boxShadow: "0px 14px 19px rgba(0, 0, 0, 0.2)", // Box shadow
          }}
        >
          MORE FROM THE BLOG
        </h3>

        <IoIosArrowForward />
      </div>
    </>
  );
};

export default Learn;
