import React from "react";
import Header from "../../components/rootLayout/Header";
import Navbar from "../../components/rootLayout/Navbar";
import Banner from "../../components/homePage/Banner";
import FlashSale from "../../components/homePage/FlashSale";
import Category from "../../components/homePage/Category";
import BestSelling from "../../components/homePage/BestSelling";
import Experience from "../../components/homePage/Experience";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Category />
      <BestSelling />
      <Experience />
    </div>
  );
};

export default Homepage;
