import React from 'react';
import loader from "../../Lottie/Loader.json";
import Lottie from 'lottie-react';
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-48 w-48">
      <Lottie animationData={loader} />
      </div>
    </div>
  );
};

export default Loader;
