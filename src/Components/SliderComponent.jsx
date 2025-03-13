import React from "react";
import Slider from "react-slick";
import storedReq from "../../fetchedData.json";
// Slick Assets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-0 z-10 bg-[#F6F6F6] text-black p-3 flex items-center justify-center transform -translate-y-1/2 shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] md:inline-block hidden"
      style={{ width: "48px", height: "48px" }}
      onClick={onClick}
    >
      <FaChevronLeft size={24} />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-0 z-10 bg-[#F6F6F6] text-black p-3 flex items-center justify-center transform -translate-y-1/2 shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] md:inline-block hidden"
      style={{ width: "48px", height: "48px" }}
      onClick={onClick}
    >
      <FaChevronRight size={24} />
    </button>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: 3 slides per view for desktop
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1.14, // 1 full image + a small part of the next
          slidesToScroll: 1,
          centerMode: true, // Ensures proper centering
          centerPadding: "11%", // Dynamic spacing (adjust if needed)
          infinite: true, // Avoids unnecessary looping issues
        },
      },
    ],
  };

  return (
    <div className=" flex flex-col gap-x-4 w-full overfolow-hidden">
      <Slider {...settings}>
        {storedReq.data.map((data) => (
          <div
            key={data.ID}
            className="relative px-[26px] max-md:px-[10px] box-border"
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-[391/552]">
              <img
                src={data.image_url}
                alt={`slide-${data.id}`}
                className="w-full h-full object-cover rounded-none border-none"
              />
              {/* Vignette Effect (Starts from Bottom, Covers 30%) */}
              <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* TEXT OVERLAY (Centered at Bottom, On Image) */}
            <div className="font-[Martel Sans] font-semibold text-[26px] max-md:text-lg absolute bottom-4 left-1/2 -translate-x-1/2 text-white px-4 py-2 text-center w-max uppercase">
              {data.post_title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
