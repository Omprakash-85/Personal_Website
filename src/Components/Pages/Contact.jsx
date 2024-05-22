import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import contact from "../../Lottie/contact.json";
import axios from "axios";
import { postApiUrls } from "./Apis";
import emailjs from "@emailjs/browser";
// const BASE_URL = process.env.BASE_URL;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const validationErrors = {};
    if (formData.name.trim() === "") {
      validationErrors.name = "Name is required";
    }
    if (formData.email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (formData.phone.trim() === "") {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Phone number must be 10 digits";
    }
    if (formData.message.trim() === "") {
      validationErrors.message = "Message is required";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(`${postApiUrls}`, formData);
        if (response.data.success) {
          emailjs.sendForm("service_jjg2ybf", "template_1sh88rj", e.target, {
            publicKey: "5avrxgGOFhKVdhoaz",
          }).then(() => {
            setSubmitted(true);
            setLoading(false);
            setTimeout(() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
              });
            }, 10000);
          }).catch((error) => {
            console.error("Error sending email:", error);
            setLoading(false);
            setSubmitted(false);
          });
        } else {
          setErrors(response.data.errors);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setLoading(false);
      }
    }else{
      setLoading(false);
    }
  };
  

  return (
    <div>
      <div className="section-1 py-8 lg:py-10 md:py-8 bg-[#f6f3fc;] my-5">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <h1 className="text-4xl lg:text-5xl md:text-4xl heading-text ff font-bold text-center">
            Contact Me
          </h1>
        </div>
      </div>
      <div className="section-1 py-6 lg:py-10 md:py-8 bg-[#f6f3fc;] my-5">
        <div className="container mx-auto px-5 lg:px-4 md:px-4">
          <div className="grid grid-cols-12 lg:gap-12 items-center">
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <Lottie animationData={contact} />
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-6 my-4 mb-0 md:my-10">
              <h1 className="text-3xl mb-5 lg:pb-2 heading-text ff font-semibold">
                Let's get in touch
              </h1>
              {submitted ? (
                <div className="lg:block md:block block">
                  <h1 className="ff text-3xl heading-text font-semibold">
                    Hi {formData.name},
                  </h1>
                  <p className="ff text-[#742750;] text-lg">
                    Thank you for reaching out to us!
                  </p>
                  <p className="ff text-[#742750;] text-lg">
                    We have received your message and will get back to you as
                    soon as possible.{" "}
                  </p>
                  <p className="ff text-[#742750;] text-lg">
                    In the meantime, if you have any urgent inquiries, feel free
                    to contact us directly at ,{" "}
                    <a
                      className="heading-text text-lg font-semibold"
                      href="tel:+915829488001"
                    >
                      8529488001
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} ref={form}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="text-xl font-semibold text-[#742750]"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`bg-transparent appearance-none border-b border-[#6641ab] w-full py-1 text-xl font-semibold text-[#2a1454] leading-tight focus:outline-none focus:border-[#2a1454] ${
                        errors.name && "border-red-500"
                      }`}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="text-red-500 text-sm ff font-normal">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="text-xl font-semibold text-[#742750]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      className={`bg-transparent appearance-none border-b border-[#6641ab] w-full py-1 text-xl font-semibold text-[#2a1454] leading-tight focus:outline-none focus:border-[#2a1454] ${
                        errors.email && "border-red-500"
                      }`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="text-red-500 text-sm ff">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="text-xl font-semibold text-[#742750]"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`bg-transparent appearance-none border-b border-[#6641ab] w-full py-1 text-xl font-semibold text-[#2a1454] leading-tight focus:outline-none focus:border-[#2a1454] ${
                        errors.phone && "border-red-500"
                      }`}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="text-red-500 text-sm ff">
                        {errors.phone}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="text-xl font-semibold text-[#742750]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className={`lg:h-32 md:h-28 h-24 bg-transparent appearance-none border-b border-[#6641ab] w-full py-1 text-xl font-semibold text-[#2a1454] leading-tight focus:outline-none focus:border-[#2a1454] ${
                        errors.message && "border-red-500"
                      }`}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <div className="text-red-500 text-sm ff">
                        {errors.message}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    {/* <button
                      type="submit"
                      className="bg-[#6641ab] w-full h-16 rounded text-white text-xl font-semibold focus:outline-none focus:shadow-outline"
                    >
                      Contact Us
                    </button> */}
                     {loading ? (
                      <div className="flex justify-center items-center bg-[#6641ab] w-full h-16 rounded text-white text-xl">
                        <svg
                          className="animate-spin h-8 w-8 mr-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a7.963 7.963 0 01-2 5.291l3 2.647A11.952 11.952 0 0024 12h-4zm-2-5.291l-3 2.647A11.952 11.952 0 0012 0v4c3.042 0 5.824 1.135 7.938 3H18z"
                          ></path>
                        </svg>
                        <span className="text-xl font-semibold pp">Submitted</span>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="bg-[#6641ab] w-full h-16 rounded text-white text-xl font-semibold focus:outline-none focus:shadow-outline"
                      >
                        Contact Us
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
