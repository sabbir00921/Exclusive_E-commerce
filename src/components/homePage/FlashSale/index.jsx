import React, { useEffect } from "react";
import ProductCommonLayout from "../../commoncomponents/ProductCommonLayout";
import ProductCard from "../../commoncomponents/ProductCard/";
import { useState } from "react";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";

const FlashSale = () => {
  const [timer, detTimer] = useState(1);
  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <div className="container">
      <div className="border-b-[1px] border-text-black-gray">
        <ProductCommonLayout
          ProductCard={ProductCard}
          timeStamp={true}
          timeofOffer={timer}
          isAerrow={true}
          heading={"Today's"}
          description={"Flash Sale"}
          componentdata={data?.products}
          slidesToShow={5}
          isLoading={isLoading}
        />

        <div className="pb-20">
          <button className="px-12 py-4 bg-red rounded text-md font-poppins font-medium text-white-FFFFFF opacity-95 hover:opacity-100 cursor-pointer">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
