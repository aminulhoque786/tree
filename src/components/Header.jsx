import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-2 bg-hbg">
      <div className="max-w-container mx-auto">
        <div className="flex-wrap flex items-center">
          <div className="font-pops w-full lg:w-1/4 lg:text-white text-[#4eccd8] flex flex-col sm:flex-row gap-2 items-center justify-center lg:justify-start">
            <div className="flex gap-2 items-center">
              <TfiEmail />
              <p>mail@yourcompany.com</p>
            </div>
          </div>
          <div className="font-pops w-full lg:w-1/4 lg:text-white text-[#4eccd8] flex flex-col sm:flex-row gap-2 items-center py-2 lg:py-0 justify-center lg:justify-start">
            <div className="flex gap-2 items-center">
              <FaPhoneVolume />
              <p>+896 120 5889 (Toll free)</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-white flex lg:justify-end justify-center gap-x-3 items-center">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />

            <FaLinkedin />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
