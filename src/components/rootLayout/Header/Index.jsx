import React from "react";

const Header = () => {
  return (
    <div className="py-4 bg-black-color">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div></div>
          <div>
            <h2 className="text-white-FFFFFF font-poppins text-[15px] font-normal">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h2>
          </div>
          <div>
            <select
              name=""
              id=""
              className="text-white-FFFFFF font-poppins text-[15px] font-normal bg-black"
            >
              <option className="" value="#">
                English
              </option>
              <option className="" value="#">
                Bangla
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
