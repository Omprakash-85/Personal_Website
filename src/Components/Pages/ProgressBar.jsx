import React from "react";

const ProgressBar = ({ title, progress }) => {
  return (
    <div className="w-full ">
      <label className="block text-xl ff font-medium text-[#2a1454;]">{title}</label>
      <div className="relative pt-1 pp">
        <div className="flex h-4 overflow-hidden text-xl bg-gray-200 rounded">
          <div
            style={{ width: `${progress}%` }}
            className="flex flex-col justify-center bg-[#d35598;] shadow-none text-xl whitespace-nowrap"
          ></div>
        </div>
        <div className="flex justify-end mt-1 text-xl text-[#323232;]">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
