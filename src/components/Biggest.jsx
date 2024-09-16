import React from "react";
import hur from "../assets/hurr.png";
import petro from "../assets/petr.png";
import jahaj from "../assets/jahaj.png";
import pie from "../assets/pie.png";
import tui from "../assets/Services2.png";
import fui from "../assets/Services3.png";
import serv from "../assets/Services1.png";
const Biggest = () => {
  return (
    <>
      <div className="pt-4 flex flex-col lg:flex-row">
        <div className="max-w-container mx-auto text-[#000000] pt-[30px] pb-[50px] lg:pb-[100px]">
          <h2 className="text-center lg:text-left lg:w-[289px] font-bold font-pops text-[32px] lg:text-[48px]">
            The biggest supplier in the country
          </h2>
        </div>
        <div className="w-full lg:w-[651px] pt-[30px] pb-[30px] lg:pt-[111px] lg:pb-[161px]">
          <p className="font-pops text-center lg:text-left px-4 lg:px-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </div>
      </div>

      <div className="max-w-container mx-auto flex items-center gap-4">
        <div className=" w-1/4">
          <img src={hur} alt="" />
        </div>
        <div className="w-1/4">
          <img src={petro} alt="" />
        </div>
        <div className="w-1/4">
          <img src={jahaj} alt="" />
        </div>
        <div className="w-1/4">
          <img src={pie} alt="" />
        </div>
      </div>
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/2 lg:w-[509px]">
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold font-pops pt-4">
            Our Services
          </h2>
          <p className="font-pops text-base md:text-lg lg:text-[16px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-[690px] relative pt-3">
          <img src={serv} alt="" className="w-full h-auto" />
          <h2 className="absolute top-10 left-45 pt-1 text-white font-pops text-lg md:text-xl lg:text-[18px] items-center lg:pt-12 font-bold p-4 ">
            Modern natural oil and gas refineries.
          </h2>
          <button className="top-20 left-[23px] absolute lg:top-[150px] lg:left-[30px] bg-[#F40404] p-2 text-white font-pops text-sm md:text-base lg:text-[15px] hover:bg-[#2b9ec7] transition duration-700 ease-in-out">
            Learn More
          </button>
        </div>
      </div>

      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <div className="w-full md:w-1/2 relative">
          <img src={tui} alt="" className="w-full h-auto" />
          <h2 className="absolute bottom-16 left-5 text-white font-pops text-lg md:text-xl font-bold p-4">
            Supply of national industries.
          </h2>
          <button className="absolute bottom-4 left-10 bg-[#F40404] p-2 text-white font-pops text-sm md:text-base hover:bg-[#2b9ec7] transition duration-700 ease-in-out">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img src={fui} alt="" className="w-full h-auto" />
          <h2 className="absolute bottom-16 left-5 text-white font-pops text-lg md:text-xl font-bold p-4">
            National fuel distribution and supply.
          </h2>
          <button className="absolute bottom-4 left-10 bg-[#F40404] p-2 text-white font-pops text-sm md:text-base hover:bg-[#2b9ec7] transition duration-700 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Biggest;
