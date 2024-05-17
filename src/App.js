import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Loader from "./Components/Pages/Loader";
import Footer from "./Components/Pages/Footer";
import { IoIosArrowUp } from "react-icons/io";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <button
              className={`fixed lg:bottom-6 bottom-10 right-6 p-1 bg-[#e65cff;] text-white rounded shadow-md focus:outline-none transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={scrollToTop}
            >
              <IoIosArrowUp className="w-8 h-8 mx-auto" />
            </button>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
