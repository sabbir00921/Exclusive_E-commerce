import React from "react";
import Heading from "../../commoncomponents/Heading";
import Timer from "../../commoncomponents/Timer";

const FlashSale = () => {
  return (
    <div className="mt-[140px] mb-[60px]">
      <div className="container">
        <div className="flex gap-x-20 items-end">
          <Heading title={"Today's"} description={"Flash Sale"} />
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
