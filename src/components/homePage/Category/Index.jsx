import React, { useState } from "react";
import ProductCommonLayout from "../../commoncomponents/ProductCommonLayout";
import categoryItem from "./../../commoncomponents/CategoryItem";
import { CiCamera, CiHeadphones, CiMobile1 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoWatchOutline } from "react-icons/io5";
import { TbDeviceGamepad } from "react-icons/tb";

const CategoryIndex = () => {
  const categoryBrowseData = [
    { id: 1, name: "Phones", image: <CiMobile1 /> },
    { id: 2, name: "Computers", image: <RiComputerLine /> },
    { id: 3, name: "Smartwatch", image: <IoWatchOutline /> },
    { id: 4, name: "Camera", image: <CiCamera /> },
    { id: 5, name: "Headphones", image: <CiHeadphones /> },
    { id: 6, name: "Gaming", image: <TbDeviceGamepad /> },
    { id: 7, name: "Camera", image: <CiCamera /> },
    { id: 8, name: "Headphones", image: <CiHeadphones /> },
    { id: 9, name: "Gaming", image: <TbDeviceGamepad /> },
  ];

  return (
    <div className="container pb-10">
      <div className=" items-center">
        <ProductCommonLayout
          ProductCard={categoryItem}
          isAerrow={true}
          heading={"Categories"}
          description={"Browse By Category"}
          slidesToShow={6}
          componentdata={categoryBrowseData}
        />
      </div>
    </div>
  );
};

export default CategoryIndex;
