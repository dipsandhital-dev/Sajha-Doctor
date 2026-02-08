import React from "react";
import { assets } from "../../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side ------------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctor
        </p>

        <div className="flex flex-col md:flex-row items-center text-sm gap-3 font-light text-white">
          <img src={assets.group_profiles} alt="Group Profiles" className="  w-25" />
          <p>
            Simply browse through our extensive list of trusted doctors <br className="hidden sm:block" />
            and book appointments with ease.
          </p>
        </div>

        <a
          href="#"
          className="flex items-center gap-2 bg-white py-3 px-6 rounded-full text-gray-600 m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book appointment
          <img src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
        </a>
      </div>

      {/* Right Side --------------- */}
      <div className="md:w-1/2 relative flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          src={assets.header_img}
          alt="Header"
          className="w-full md:w-auto md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
