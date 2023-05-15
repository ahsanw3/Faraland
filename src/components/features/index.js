import Card from "./Card";
import left from '../../assets/features/images/features-prev.847ecbee.svg'
import React from "react";
import right from '../../assets/features/images/features-next.c601439a.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;

  return (
    <div className="absolute top-32 -right-10" onClick={onClick}>
      <img src={right} alt="arrow-btn"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return (
    <div className="absolute top-32 -left-10" onClick={onClick}>
      <img src={left} alt="arrow-btn"/>
    </div>
  );
}


const Features = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [ 
      {

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col justify-center text-white mt-72">
        <div className="flex text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan justify-center p-4">Features</div>
          <div className=" w-[45%] sm:w-[80%] m-auto max-w-[1100px] mt-10">
            <Slider {...settings} className="  relative">
            {[...Array(10)].map((_, i) => {
                return (
                <div key={i} >
                    <Card />

                </div>
                );
              })}
            </Slider>
        </div>
      </div>
    </>
  );
};

export default Features