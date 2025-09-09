import React from "react";

const CategoryItem = ({ categorydata }) => {
  // console.log(categorydata);

  return (
    <div className="mt-20">
      <div className="w-[170px] h-[145px] hover:text-white-FFFFFF hover:bg-red border-[1px] transition border-text-black-gray bg-transparent rounded cursor-pointer flex gap-y-3 flex-col items-center justify-center">
        <span className="text-4xl mb-2">{categorydata.image}</span>
        <p className="text-xl font-poppins font-normal">{categorydata.name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
