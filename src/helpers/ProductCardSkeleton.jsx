import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="mt-10 animate-pulse">
      <div className="bg-gray-100 flex flex-col items-center pb-12 relative rounded">
        {/* Top badge & icons */}
        <div className="flex w-full items-start p-3 justify-between">
          <span className="inline-block h-6 w-12 rounded bg-gray-300"></span>
          <div className="flex flex-col gap-y-2 absolute right-2 top-3">
            <span className="w-8 h-8 rounded-full bg-gray-300"></span>
            <span className="w-8 h-8 rounded-full bg-gray-300"></span>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="w-[172px] h-[150px] bg-gray-300 rounded"></div>

        {/* Add to cart button placeholder */}
        <div className="absolute bottom-0 h-10 w-full bg-gray-300 rounded-b"></div>
      </div>

      {/* Product Info Skeleton */}
      <div className="flex flex-col gap-y-2 items-start mt-4">
        <div className="h-5 w-40 bg-gray-300 rounded"></div>
        <div className="flex gap-x-3 w-full">
          <span className="h-4 w-12 bg-gray-300 rounded"></span>
          <span className="h-4 w-12 bg-gray-300 rounded"></span>
        </div>
        <div className="flex gap-x-1 items-center">
          {[...new Array(5)].map((_, index) => (
            <span
              key={index}
              className="h-4 w-4 bg-gray-300 rounded"
            ></span>
          ))}
          <span className="h-4 w-10 bg-gray-300 rounded ml-2"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
