import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Star = ({ rating = 0 }) => {
const star = Array.from({ length: 5 }, (_, i) => {
  const full = i + 1;          // 1-based star number
  const half = i + 0.5;
  if (rating >= full) {
    return <IoIosStar key={i} className="text-yellow-400" />;
  } else if (rating >= half) {
    return <IoIosStarHalf key={i} className="text-yellow-400" />;
  } else {
    return <IoIosStarOutline key={i} className="text-gray-600" />;
  }
});



  return (
    <div className="flex gap-x-1 items-center cursor-pointer text-[14px] font-semibold">
      {star}
      <h2 className="opacity-60 ">{`(${rating})`}</h2>
    </div>
  );
};

export default Star;
