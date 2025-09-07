import React from "react";
import Header from "../../components/rootLayout/Header/Index";
import Navbar from "../../components/rootLayout/Navbar/Index";
import Banner from "../../components/homePage/Banner/Index";
import FlashSale from "../../components/homePage/FlashSale";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
    </div>
  );
};

export default Homepage;
