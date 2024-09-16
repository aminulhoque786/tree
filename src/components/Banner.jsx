import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-hero-pattern h-[693px] bg-no-repeat bg-cover font-pops">
        <div className=" pt-40 pl-5 lg:pt-0 max-w-container mx-auto text-white text-4xl md:text-5xl lg:text-6xl font-bold font-pops">
          <h2 className="w-full md:w-3/4 pt-3 md:pt-40 lg:pt-60  ">
            We exist since 1975 in the oil and gas industry.
          </h2>
          <button className=" relative mt-1 md:absolute md:top-[550px] md:left-[90px] bg-[#F40404] px-4 py-2 text-sm md:text-base hover:bg-[#2bc79d] transition duration-700 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
