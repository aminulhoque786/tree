import React from "react";
import petro from "../assets/huj.png";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume, FaMapLocationDot } from "react-icons/fa6";
import lih from "../assets/lih (2).png";
import lihw from "../assets/lih3.PNG";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="max-w-container mx-auto bg-black pt-10 flex ">
        {/* <div className='pt-[140px] pl-10 '>
<img src={petro} alt="" />
<div className="font-pops w-full lg:w-1/4 lg:text-white text-[#4eccd8] flex flex-col sm:flex-row gap-2 items-center justify-center lg:justify-start">
            <div className="flex gap-2 items-center pt-8">
              <TfiEmail />
              <p >mail@yourcompany.com</p>
            </div>
          </div>


            <div className="font-pops w-full lg:w-1/4 lg:text-white text-[#4eccd8] flex flex-col sm:flex-row gap-2 items-center py-2 lg:py-0 justify-center lg:justify-start">
            <div className="flex gap-2 items-center pt-8">
              <FaPhoneVolume />
              <p>+896 120 5889 (Toll free)</p>
            </div>
          </div>
            <div className="font-pops w-full lg:w-1/4 lg:text-white text-[#4eccd8] flex flex-col sm:flex-row gap-2 items-center py-2 lg:py-0 justify-center lg:justify-start">
            <div className="flex gap-2 items-center pt-8 ">
              <FaMapLocationDot  />
              <p>101 Baker Street, New York, USA, 12345</p>
            </div>
          </div>
          <div className="text-[#fff] flex gap-4 pt-6 ">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />

            <FaLinkedin />
          </div>
</div> */}
        <div className="w-full p-12 text-[#fff] lg:flex lg:justify-between">
          <div className="lg:w-3/4">
            <img src={petro} alt="" />
            <div className="font-pops w-full lg:w-1/4 pt-8 text-[#4eccd8] flex flex-col sm:flex-row gap-2 items-center justify-center lg:justify-start">
              <div className="flex gap-2 items-center">
                <TfiEmail />
                <p>mail@yourcompany.com</p>
              </div>
            </div>
            <div className="font-pops w-full lg:w-3/4 pt-8 text-[#4eccd8] flex flex-col sm:flex-row gap-2 items-center justify-center lg:justify-start">
              <div className="flex gap-2 items-center">
                <FaPhoneVolume />
                <p>+896 120 5889</p>
              </div>
            </div>

            <div className="font-pops pt-10 w-full lg:w-3/4 text-[#4eccd8] flex flex-col sm:flex-row gap-2 items-center justify-center lg:justify-start">
              <div className="flex gap-2 items-center">
                <FaMapLocationDot />
                <p>101 Baker Street, New York, USA, 12345</p>
              </div>
            </div>

            <div className="text-white flex gap-x-3 items-center pt-8 justify-center lg:justify-start">
              <FaFacebook className="text-[red] text-[30px]" />
              <FaTwitter className="text-[red] text-[30px]" />
              <FaInstagram className="text-[red] text-[30px]" />
              <FaLinkedin className="text-[red] text-[30px]" />
            </div>
            <h2 className="text-[#fff] pt-8 opacity-35 text-center lg:text-left">
              © Copyright 2024 by Aminul – All rights reserved.
            </h2>
          </div>

          <div className="w-full lg:w-1/4 pt-24 font-pops items-center">
            <h3 className="text-[#fff] text-center lg:text-left  ">Company</h3>
            <ul className="text-[#fff] pt-7 text-base font-pops ">
              <li className="pt-3 hover:text-[#5fd1ee] transition duration-700 ease-in-out">
                Home
              </li>
              <li className="pt-3 hover:text-[#5fd1ee] transition duration-700 ease-in-out">
                About
              </li>
              <li className="pt-3 hover:text-[#5fd1ee] transition duration-700 ease-in-out">
                Service
              </li>
              <li className="pt-3 hover:text-[#5fd1ee] transition duration-700 ease-in-out">
                Gallery
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/4 pt-24">
            <h3 className="text-[#fff] text-center lg:text-left">Others</h3>
            <ul className="text-[#fff] pt-7 text-base font-pops">
              <li className="pt-3 hover:text-[#5fd1ee] transition duration-700 ease-in-out">
                Blog
              </li>
              <li className="pt-3 hover:text-[#5fd1ee] transition duration-700 ease-in-out">
                Contact
              </li>
              <li className="pt-3 hover:text-[#5fd1ee] transition duration-700 ease-in-out">
                Terms & Conditions
              </li>
              <li className="pt-3 hover:text-[#5fd1ee] transition duration-700 ease-in-out">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/4 pt-24 text-center lg:text-left">
            <h3 className="text-[#fff]">Certificate</h3>
            <div className="flex justify-center lg:justify-start gap-3">
              <div className="w-3/4 pt-3">
                <img src={lih} alt="" />
              </div>
              <div className="w-3/4 pt-3">
                <img src={lihw} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
