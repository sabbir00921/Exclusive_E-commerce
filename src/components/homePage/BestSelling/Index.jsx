import React from "react";
import ProductCommonLayout from "../../commoncomponents/ProductCommonLayout";
import ProductCard from "../../commoncomponents/ProductCard";
import { useBestSellingProductQuery } from "../../../Features/Api/ProductApi";

const BestsSelling = () => {
  const { data, error, isLoading } = useBestSellingProductQuery();

  return (
    <div className="container border-t-2 border-gray-500">
      <ProductCommonLayout
        ProductCard={ProductCard}
        heading={"This Month"}
        description={"Best Selling Products"}
        componentdata={data?.products}
        slidesToShow={4}
        viewButton = "View All"
        isLoading={false}
      />
    </div>
  );
};

export default BestsSelling;
