import React, { useRef } from "react";
import Slider from "react-slick";
import Heading from "../../components/commoncomponents/Heading";
import Timer from "../../components/commoncomponents/Timer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCardSkeleton from "../../helpers/ProductCardSkeleton";

const ProductCommonLayout = ({
  ProductCard = () => <ProductCardSkeleton />,
  timeStamp = false,
  timeofOffer = false,
  isAerrow = false,
  heading = "Today's",
  description = "Flash Sale",
  slidesToShow = 5,
  componentdata,
  isLoading = false,
}) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: isLoading ? true : false,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 5,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="mt-[140px] mb-[60px]">
      <div className="container">
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-x-20">
            <Heading title={heading} description={description} />
            {timeStamp && <Timer timeofOffer={timeofOffer} />}
          </div>

          <div className="flex justify-between items-end ">
            {isAerrow && (
              <div className="flex gap-x-5">
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="text-2xl text-text-black-gray cursor-pointer"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className="text-2xl text-text-black-gray cursor-pointer"
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {(componentdata ? componentdata : [...Array(10)])?.map(
              (item, index) => (
                <div key={index} className="px-2">
                  {!isLoading && componentdata ? (
                    <ProductCard categorydata={item || {}} />
                  ) : (
                    <ProductCardSkeleton />
                  )}
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
