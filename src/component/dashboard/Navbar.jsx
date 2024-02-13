import React from "react";
import logo from "../../assets/logo.png";
import { MdMenu } from "react-icons/md";
const Navbar = ({ setToggleSodebar }) => {
  return (
    <div className=" fixed w-full h-[4rem] top-0 left-0 z-40 bg-blue-950 p-3 sm:px-6 flex items-center justify-between">
      <div className=" flex items-center gap-2">
        {
          <span
            className=" md:hidden text-3xl text-white cursor-pointer"
            onClick={() => setToggleSodebar((prev) => !prev)}
          >
            <MdMenu />
          </span>
        }
        <h1 className=" text-lg sm:text-xl font-bold text-white">
          Forecasting Dashboard
        </h1>
      </div>

      <div className="w-[5rem] h-[2rem]">
        <img src={logo} alt="logo" className="h-full w-full " />
      </div>
    </div>
  );
};

export default Navbar;
