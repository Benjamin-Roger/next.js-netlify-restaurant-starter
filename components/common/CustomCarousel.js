import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { colors } = require("@/utils/colorScheme.js");

export const CustomCarousel = (props) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <span className="h-2 w-8 px-2 block bg-gray-300 rounded-full text-transparent overflow-hidden transition-all duration-150 hover:bg-primary shadow"></span>
    ),
  };

  return (
    <>
      <Slider {...settings}>{props.children}</Slider>
      <style jsx global>{`

        ${"#"+props.parentId} .slick-dots li {
          margin: 0 20px;
        }

        ${"#"+props.parentId} .slick-dots li.slick-active span {
          transform: scaleX(150%) !important;
          background: ${colors.primary.dark}!important;
        }

        ${"#"+props.parentId} .slick-dots li:hover button {
        }
      `}</style>
    </>
  );
};

export default CustomCarousel;
