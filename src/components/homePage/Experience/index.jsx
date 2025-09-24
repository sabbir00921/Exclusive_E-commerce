import React from "react";
import image1 from "../../../assets/experience/experience_item1.png";

const Experience = () => {
  return (
    <div className="container my-[140px] bg-black">
      <div className="flex ">
        <div className="w-1/2 flex flex-col gap-y-8 py-[69px] ps-[56px]">
          <h3 className="font-poppins text-[16px] font-semibold text-[#00FF66]">
            Categories
          </h3>
          <h2 className="w-[444px] font-inter text-5xl font-semibold text-white-FFFFFF leading-16 tracking-[4%]">
            Enhance Your Music Experience
          </h2>
          <div className="flex gap-x-6">
            <div className="h-15 w-15 flex flex-col items-center justify-center bg-white-FFFFFF rounded-full p-4">
              <p className="font-poppins text-[16px] font-semibold">12</p>
              <p className="font-poppins text-[11px]">Hours</p>
            </div>
            <div className="h-15 w-15 flex flex-col items-center justify-center bg-white-FFFFFF rounded-full p-4">
              <p className="font-poppins text-[16px] font-semibold">05</p>
              <p className="font-poppins text-[11px]">Days</p>
            </div>
            <div className="h-15 w-15 flex flex-col items-center justify-center bg-white-FFFFFF rounded-full p-4">
              <p className="font-poppins text-[16px] font-semibold">59</p>
              <p className="font-poppins text-[11px]">Minutes</p>
            </div>
            <div className="h-15 w-15 flex flex-col items-center justify-center bg-white-FFFFFF rounded-full p-4">
              <p className="font-poppins text-[16px] font-semibold">35</p>
              <p className="font-poppins text-[11px]">Seconds</p>
            </div>
          </div>
          <div>
            <button className="px-12 py-4 text-white-FFFFFF rounded text-md font-poppins font-medium bg-[#00FF66] opacity-95 hover:opacity-100 cursor-pointer">
              Buy Now!
            </button>
          </div>
        </div>
        {/* Right Part */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="relative">
            {/* shadow circle behind */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl"></div>
            <img
              className="relative h-[330px] w-[568px] object-cover rounded-xl"
              src={image1}
              alt="image1 missing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
