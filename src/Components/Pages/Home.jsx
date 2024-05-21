/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import hello from "../Assests/Images/logo-hello.png";
import Gif from "../../Lottie/Gif-1.json";
import Lottie from "lottie-react";
import "../Assests/Css/Home.css";
import fast from "../Assests/Images/faster-1.png";
import responsive from "../Assests/Images/1837965.png";
import intuitue from "../Assests/Images/intuitue.png";
import development from "../Assests/Images/design.png";
import dynmic from "../Assests/Images/dynmic.png";
import design from "../Assests/Images/web-design.png";
import { Link, NavLink } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import Resume from '../Assests/Images/om-jangid.pdf'
const Home = () => {
  return (
    <>
      <div className="section-1 py-4 lg:py-0 md:py-4">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 md:col-span-12 lg:col-span-7">
              <div className="text-xl font-normal text-center lg:text-left md:text-left">
                <div className="flex items-center justify-center lg:justify-start md:justify-start text-2xl lg:text-3xl md:text-3xl lg:my-2 my-1">
                  <h1 className="pp text-4xl lg:text-4xl md:text-4xl font-semibold my-2 heading-text">
                    Hello! I'm Omprakash
                  </h1>
                  <img
                    className="w-8 h-8 hello animate-rotateXY hidden lg:block md:block mx-4"
                    src={hello}
                    alt="Om jangid |developer | designger"
                  />
                </div>
                <p className=" pp text-xl text-[#323232;] my-3 mb-4 mt-0 leading-8 lg:leading-10 paragraph-text">
                  As a passionate Full Stack Software Developer with expertise
                  in Html, Css, Javascript, React js, Node.js, MongoDB, Express
                  js,Wordpress, Tilwind css , I specialize in crafting robust
                  web. Skilled in HTML, CSS, and JavaScript, I enhance user
                  experiences across platforms. Driven by a passion for
                  innovation, I deliver cutting-edge, scalable solutions. Let's
                  connect to advance your technological goals.
                </p>

                <a href={Resume}
                  className="button-btn ff py-2 text-xl px-4 rounded-lg mb-2 border-2 border-[#2a1454;] cursor-pointer"
                  download="om-jangid-resume.pdf"
                >
                  Download CV
                </a>
   
  
                <Link as={NavLink} to="/contact">
                  <button className=" paragraph-text ff py-2 text-xl px-4 lg:px-12 md:px-12 mx-4 rounded-lg  border-2 border-[#2a1454;]">
                    Hire Me
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-5">
              <Lottie animationData={Gif} />
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 py-4 lg:py-5 md:4">
        <div className="bg-[#f6f3fc;] lg:py-10 md:py-7 py-6 ">
          <div className="container mx-auto px-5 lg:px-4 md:px-4">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="shadow-sm bg-[#fff;] p-5 rounded text-center">
                  <img
                    className="w-24 h-24 mx-auto"
                    src={fast}
                    alt="Om jangid |developer | designger"
                  />
                  <h1 className="text-2xl ff lg:text-2xl md:text-2xl font-medium my-1 heading-text">
                    Fast
                  </h1>
                  <p className="pp text-lg paragraph-text">
                    Swift web development has gained traction in recent.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="shadow-sm bg-[#fff;] p-5 rounded text-center">
                  <img
                    className="w-24 h-24 mx-auto"
                    src={responsive}
                    alt="Om jangid |developer | designger"
                  />
                  <h1 className="text-2xl ff lg:text-2xl md:text-2xl font-medium my-1 heading-text">
                    Responsive
                  </h1>
                  <p className="pp text-lg paragraph-text">
                    Responsive websites with expertise and precision.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="shadow-sm bg-[#fff;] p-5 rounded text-center">
                  <img
                    className="w-24 h-24 mx-auto"
                    src={intuitue}
                    alt="Om jangid |developer | designger"
                  />
                  <h1 className="text-2xl ff lg:text-2xl md:text-2xl font-medium my-1 heading-text">
                    Intuitive
                  </h1>
                  <p className="pp text-lg paragraph-text">
                    Crafting intuitive web experiences involves.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="shadow-sm bg-[#fff;] p-5 rounded text-center">
                  <img
                    className="w-24 h-24 mx-auto"
                    src={dynmic}
                    alt="Om jangid |developer | designger"
                  />
                  <h1 className="text-2xl ff lg:text-2xl md:text-2xl font-medium my-1 heading-text">
                    Dynamic
                  </h1>
                  <p className="pp text-lg paragraph-text">
                    Creating dynamic web designs to elevate portfolios.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="shadow-sm bg-[#fff;] p-5 rounded text-center">
                  <img
                    className="w-24 h-24 mx-auto"
                    src={development}
                    alt="Om jangid |developer | designger"
                  />
                  <h1 className="text-2xl ff lg:text-2xl md:text-2xl font-medium my-1 heading-text">
                    Web Design
                  </h1>
                  <p className="pp text-lg paragraph-text">
                    Crafting captivating web designs that leave a lasting.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="shadow-sm bg-[#fff;] p-5 rounded text-center">
                  <img
                    className="w-24 h-24 mx-auto"
                    src={design}
                    alt="Om jangid |developer | designger"
                  />
                  <h1 className="text-2xl ff lg:text-2xl md:text-2xl font-medium my-1 heading-text">
                    Web Development
                  </h1>
                  <p className="pp text-lg paragraph-text">
                    Building dynamic web solutions to meet your digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3 py-6 lg:py-6 md:py-4 bg-[#f6f3fc;] my-0 lg:my-3 md:my-3">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <h1 className="ff text-3xl lg:text-4xl md:text-3xl font-semibold text-center my-1 mb-2 lg:mb-4 heading-text">
            Working Skills
          </h1>
          <p className="pp text-xl text-center paragraph-text my-3 mb-4 mt-0 leading-8 lg:leading-10">
            I will work in accordance with the company's rules and regulations,
            aligning my efforts with the mentioned skills to ensure
            comprehensive and efficient execution within the IT sector.
          </p>
          <div className="grid grid-cols-12 lg:gap-10 md:gap-5">
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <ProgressBar title="Html5" progress={90} />
              <ProgressBar title="Css3" progress={80} />
              <ProgressBar title="Javascript" progress={60} />
              <ProgressBar title="React js" progress={70} />
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <ProgressBar title="Node js" progress={50} />
              <ProgressBar title="Express js" progress={70} />
              <ProgressBar title="MongoDB" progress={50} />
              <ProgressBar title="Php" progress={70} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
<script
  src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
  type="module"
></script>;
export default Home;
