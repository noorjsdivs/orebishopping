import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree } from "../../assets/images";
import banner1 from "../../assets/images/banner/banner1.jpg";
import banner5 from "../../assets/images/banner/banner5.jpg";
import banner3 from "../../assets/images/banner/banner3.jpg";
import Image from "../designLayouts/Image";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {/* Banner 1 */}
        <Link to="/offer">
          <div className="w-full h-[500px] overflow-hidden flex justify-center items-center">
            <Image imgSrc={banner1} className="object-fill w-full h-full" />
          </div>
        </Link>

        {/* Banner 2 */}
        <Link to="/offer">
          <div className="w-full h-[500px] overflow-hidden flex justify-center items-center">
            <Image imgSrc={banner5} className="object-fill w-full h-full" />
          </div>
        </Link>

        {/* Banner 3 */}
        <Link to="/offer">
          <div className="w-full h-[500px] overflow-hidden flex justify-center items-center">
            <Image imgSrc={banner3} className="object-fill w-full h-full" />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
