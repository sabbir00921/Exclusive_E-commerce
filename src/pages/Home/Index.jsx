import React from "react";
import Header from "../../components/rootLayout/Header";
import Navbar from "../../components/rootLayout/Navbar/Index";
import Banner from "../../components/homePage/Banner/Index";
import FlashSale from "../../components/homePage/FlashSale/Index";
import Category from "../../components/homePage/Category/Index";
import Bestselling from "../../components/homePage/BestSelling/Index";
import Experience from "../../components/homePage/Experience/index";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Category />
      <Bestselling />
      <Experience />
    </div>
  );
};

export default Homepage;
