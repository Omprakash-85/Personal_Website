/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [openNavbar, closeNavbar] = useState(false);
  const { pathname } = useLocation();

  const handleNav = () => {
    closeNavbar(!openNavbar);
  };

  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <div className="flex items-center justify-between ff mx-auto py-4 font-normal tracking-wide">
            <div className="flex items-center justify-center">
              <div className="bg-[#742750] text-white h-12 w-12 flex items-center justify-center text-3xl font-bold rounded-full">
                O
              </div>
              <span className="heading-text ml-2 text-3xl font-bold">
                Om Prakash
              </span>
            </div>

            <ul className="hidden md:flex text-xl gap-4 items-center nav-color">
              <li
                className={`p-3 lg:px-5 ${
                  pathname === "/home" ? "text-[#742750;] font-medium" : ""
                }`}
              >
                <Link as={NavLink} to="/home">
                  Home
                </Link>
              </li>
              <li
                className={`p-3 lg:px-5 ${
                  pathname === "/about" ? "text-[#742750;] font-medium" : ""
                }`}
              >
                <Link as={NavLink} to="/about">
                  About
                </Link>
              </li>
              <li
                className={`p-3 lg:px-5 ${
                  pathname === "/contact" ? "text-[#742750;] font-medium" : ""
                }`}
              >
                <Link as={NavLink} to="/contact">
                  Contact
                </Link>
              </li>
              <Link as={NavLink} to="/contact">
                <button className=" nav-color ff lg:py-2 lg:px-14 md:px-8 md:py-2 rounded-full border-2 border-[#2a1454;]">
                  Hire Me
                </button>
              </Link>
            </ul>

            <div onClick={handleNav} className="block md:hidden ms-auto">
              {openNavbar ? (
                <AiOutlineClose size={28} />
              ) : (
                <AiOutlineMenu size={28} />
              )}
            </div>
            <ul
              className={
                openNavbar
                  ? "fixed left-0 top-0 w-[80%] h-full bg-[#ab5f86;] text-[white] z-10 ease-in-out duration-700"
                  : "ease-in-out duration-700 fixed left-[-100%]"
              }
            >
              <div className="flex items-center py-3 p-4 border-white border-b">
                <div className="bg-[#fff] text-[#742750] h-12 w-12 flex items-center justify-center text-3xl font-bold rounded-full">
                  O
                </div>
                <span className="text-white ml-2 text-2xl font-bold">
                  Om Prakash
                </span>
              </div>
              <li className="p-4 border-white border-b text-xl">
                <Link as={NavLink} to="/home" onClick={handleNav}>
                  Home
                </Link>
              </li>
              <li className="p-4 border-white border-b text-xl">
                <Link as={NavLink} to="/about" onClick={handleNav}>
                  About
                </Link>
              </li>
              <li className="p-4 border-white border-b text-xl">
                <Link as={NavLink} to="/contact" onClick={handleNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
