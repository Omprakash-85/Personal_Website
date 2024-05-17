import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="section-3 bg-[#44395a;] mt-5 lg:mt-7 mb-0">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <h2 className="text-center text-3xl lg:text-4xl md:text-3xl text-white py-7 pb-0 font-bold ff">
            Follow us!
          </h2>
          <div className="flex gap-4 lg:gap-6 flex-wrap m-auto justify-center py-6">
            <a
              href="https://github.com/"
              className="text-white border-2 text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-white border-2 text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="https://in.linkedin.com/in/omprakash-suthar"
              className="text-white border-2 text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="tel:+918529488001"
              className="text-white border-2 text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
            >
              <IoMdCall />
            </a>

            <a
              href="mailto:jangidomprakash345@gmail.com"
              className="text-white border-2 text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
            >
              <MdEmail />
            </a>
          </div>
          <div className="text-center">
            <div className="text-white pp my-2 mt-1 text-xl">
              © Copyright 2024 Om Jangid All Rights Reserved
            </div>
            <div className="text-white pp py-3 pt-1 mt-1 text-xl">
              Designed and Developed By - Om Jangid
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
