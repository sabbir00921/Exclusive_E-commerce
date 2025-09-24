import React from "react";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
import { discountedprice } from "../../helpers/discountprice";
import Star from "./Star";

const ProductCard = ({ categorydata }) => {
  return (
    <div className="mt-10">
      <div className="bg-gray-100 flex flex-col items-center pb-12 relative rounded group">
        <div className="flex w-full items-start p-3 justify-between">
          {categorydata.discountPercentage && (
            <span className="inline-block text-sm font-poppins text-white-FFFFFF font-normal px-3 py-2 rounded bg-red">
              -{categorydata.discountPercentage}%
            </span>
          )}

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
            src={categorydata?.images[0]}
            alt={"Loading"}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
          />
        </div>
        <div className="opacity-0 absolute rounded-b bottom-0 overly flex items-center justify-center cursor-pointer h-10 w-full bg-black text-white-FFFFFF font-poppins font-medium text-[16px] group-hover:opacity-100 transition-all">
          <h3>Add To Cart</h3>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 items-start mt-4">
        <h2 className="text-lg font-poppins font-medium w-full truncate">
          {categorydata.title}
        </h2>
        <div className="flex gap-x-3">
          <span className=" text-red font-medium font-poppins text-[16px] inline-block">
            $
            {discountedprice(
              categorydata.price,
              categorydata.discountPercentage
            )}
          </span>
          <span className=" text-text-black-gray font-medium font-poppins text-[16px] inline-block line-through">
            ${categorydata.price}
          </span>
        </div>
        <div>
          <Star rating={categorydata.rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
