import React from "react";

const Heading = ({title = "Title missing", description = "Description missing"}) => {
  return (
    <div className=" flex flex-col gap-y-6 items-start">
      <div className="flex items-center gap-x-4">
        <span className="w-[20px] h-[40px] rounded bg-red block"></span>
        <span className="font-poppins font-semibold text-md text-red">
          {title}
        </span>
      </div>
      <div>
        <h1 className="font-inter font-semibold text-4xl text-text-black-main">
          {description}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
