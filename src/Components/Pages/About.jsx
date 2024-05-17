import React from "react";
import Photo from "../Assests/Images/om.webp";
import { MdEmail } from "react-icons/md";
import Typing from "../../Lottie/typing.json";
import Lottie from "lottie-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const About = () => {
  return (
    <div>
      <div className="section-1 py-8 lg:py-10 md:py-8 bg-[#f6f3fc;] my-5">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <h1 className="text-4xl lg:text-5xl md:text-4xl heading-text ff font-bold text-center">
            About Me
          </h1>
        </div>
      </div>
      <div className="section-1 py-6 lg:py-10 md:py-8 bg-[#f6f3fc;] my-5">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <div className="grid grid-cols-12 gap-7 lg:gap-12 items-center">
            <div className="col-span-12 md:col-span-12 lg:col-span-4">
              <img
                className="w-96 h-auto"
                src={Photo}
                alt="Om jangid |developer | designger"
              />
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-8">
              <h2 className="ff text-3xl font-semibold text-[#44395a;] mb-3 text-center lg:text-left md:text-left">
                My Intro
              </h2>
              <h1 className="ff text-4xl font-bold heading-text mb-3 text-center lg:text-left md:text-left">
                About Me
              </h1>
              <p className=" pp paragraph-text text-xl text-center lg:text-left md:text-left leading-8 lg:leading-10">
                Greetings! I'm Om Prakash, a passionate web developer with a
                flair for crafting elegant digital solutions. With [1] years of
                experience in the industry, I've honed my skills in front-end
                and back-end development to create immersive and dynamic web
                experiences.
              </p>
              <div className="flex gap-4 lg:gap-6 flex-wrap m-auto py-6">
                <a
                  href="https://github.com/"
                  className=" text-[#2a1454;] border-2 border-[#44395a;] text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
                >
                  <FaGithub />
                </a>
                <a
                  href="tel:+918529488001"
                  className="text-[#2a1454;] border-2 border-[#44395a;] text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
                >
                  <IoMdCall />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-[#2a1454;] border-2 border-[#44395a;] text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://in.linkedin.com/in/omprakash-suthar"
                  className="text-[#2a1454;] border-2 border-[#44395a;] text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="mailto:jangidomprakash345@gmail.com"
                  className="text-[#2a1454;] border-2 border-[#44395a;] text-3xl lg:px-3 lg:py-3 py-2 px-2 rounded-full"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-1 py-6 lg:py-10 md:py-8 bg-[#f6f3fc;] my-5">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <div className="grid grid-cols-12 gap-7 lg:gap-12 items-center">
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <h1 className="ff text-4xl font-bold heading-text mb-3 text-center lg:text-left md:text-left">
                What I Do
              </h1>
              <p className=" pp paragraph-text text-xl text-center mb-3 lg:text-left md:text-left leading-8 lg:leading-10">
                I specialize in turning ideas into reality through clean,
                efficient code and intuitive user interfaces. Whether it's
                building responsive websites, developing robust web
                applications, or optimizing performance, I thrive on challenges
                that push the boundaries of innovation.
              </p>
              <ul className="pp paragraph-text text-xl text-center mb-3 lg:text-left md:text-left leading-8 lg:leading-10">
                <li>
                  <b>Front-end:</b> HTML5, CSS3, JavaScript (ES6+), React.js,
                  Bootstrap, Tailwind Css
                </li>
                <li>
                  <b>Back-end:</b> Node.js, Express.js, Php, Apis
                </li>
                <li>
                  <b>Databases:</b> SQL MySQL MongoDB
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <Lottie animationData={Typing} />
            </div>
          </div>
        </div>
      </div>
      <div className="section-1 py-6 lg:py-10 md:py-8 bg-[#f6f3fc;] my-5">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <div className="grid grid-cols-12 gap-7 lg:gap-12 items-center">
            <div className="col-span-12 md:col-span-12 lg:col-span-12">
              <h1 className="text-4xl lg:text-5xl md:text-4xl heading-text ff font-bold text-center mb-3">
                Let's Connect
              </h1>
              <p className="pp paragraph-text text-xl text-center mb-3 leading-8">
                Thank you for exploring my portfolio! If you're interested in
                discussing potential collaborations, have inquiries about my
                services, or simply want to connect, I'm just a message away.
                Please feel free to reach out through any of the following
                channels:
              </p>
              <p className="pp paragraph-text text-xl text-center mb-3 leading-8">
                I'm committed to responding promptly and look forward to the
                opportunity to connect with you. Let's embark on a journey of
                innovation and create something extraordinary together!
              </p>
              <p className="pp paragraph-text font-semibold text-xl text-center leading-8">
                Warm regards,
              </p>
              <p className="pp heading-text font-bold text-2xl text-center mb-2 leading-8">
                Omprakash Suthar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
