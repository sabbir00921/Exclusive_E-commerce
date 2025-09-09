import React from "react";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
import image from "../../assets/products/p1.png";

const ProductCard = () => {
  return (
    <div className="mt-10">
      <div className="bg-gray-100 flex flex-col items-center pb-12 relative rounded group">
        <div className="flex w-full items-start p-3 justify-between">
          <span className="inline-block text-sm font-poppins text-white-FFFFFF font-normal px-3 py-2 rounded bg-red">
            -40%
          </span>

          <div className="flex flex-col gap-y-2 absolute right-2 top-3">
            <span className="w-8 h-8 p-1 rounded flex items-center justify-center leading-none4 1rounded-full text-2xl cursor-pointer hover:bg-red hover:text-white-FFFFFF">
              <FaRegHeart />
            </span>
            <span className="w-8 h-8 p-1 rounded flex items-center justify-center leading-none4 1rounded-full text-2xl cursor-pointer hover:bg-red hover:text-white-FFFFFF">
              <FaRegEye />
            </span>
          </div>
        </div>

        <div className="w-[172px] h-[150px]">
          <img
            src={image}
            alt={image}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="opacity-0 absolute rounded-b bottom-0 overly flex items-center justify-center cursor-pointer h-10 w-full bg-black text-white-FFFFFF font-poppins font-medium text-[16px] group-hover:opacity-100 transition-all">
          <h3>Add To Cart</h3>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 items-start mt-4">
        <h2 className="text-lg font-poppins font-medium">
          HAVIT HV-G92 Gamepad
        </h2>
        <div className="flex gap-x-3">
          <span className=" text-red font-medium font-poppins text-[16px] inline-block">
            $120
          </span>
          <span className=" text-text-black-gray font-medium font-poppins text-[16px] inline-block line-through">
            $160
          </span>
        </div>
        <div className="flex gap-x-1 items-center cursor-pointer text-[14px] font-semibold">
          {[...new Array(5)].map((_, index) => (
            <span className="text-yellow-400 " key={index}>
              <FaStar />
            </span>
          ))}
          <h2 className="opacity-60 ">{`(${[...new Array(5)].length})`}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
