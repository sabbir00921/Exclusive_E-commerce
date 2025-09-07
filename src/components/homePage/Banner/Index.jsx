import React, { useState } from "react";
import { category } from "../../../../Data/data";
import { FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import banner from "../../../assets/banner/banner.png";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translatex(-50%)",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            columnGap: "10px",
            alignItems: "center",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#db4444",
            border: "3px solid #fff",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            opacity: "0.5",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setCurrentSlide(currentSlide);
    },
  };
  return (
    <div>
      <div className="container">
        <div className="flex justify-between ">
          {/* banner left */}
          <div className="w-[20%] border-r-[1.5px] border-r-text-black-gray">
            <ul className="flex flex-col pt-10">
              {category?.map((item) => (
                <div className="flex  items-center justify-between hover:bg-gray-200">
                  <li className=" font-poppins hover:px-2 transition-all text-black-color font-normal py-2 cursor-pointer">
                    {item.Category}
                  </li>
                  {item.subCategory && (
                    <span className="pr-10">
                      <FaAngleRight />
                    </span>
                  )}
                </div>
              ))}
            </ul>
          </div>
          {/* banner right */}
          <div className="w-[80%] pl-[45px] pt-10">
            <Slider {...settings}>
              {[...new Array(10)].map((_, index) => (
                <div key={index}>
                  <img
                    src={banner}
                    alt=""
                    srcset=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
