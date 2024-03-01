import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img='https://kyliecosmetics.com/cdn/shop/products/KJS_CCOL_21_CSERUM_20ml_0.67oz_CTON_150ml_5oz_Pink_Background_HR.tif-JPG-300dpi_800x.jpg?v=1676676865'
            productName="Kylie Skin"
            price="44.00"
            color="Skin-Care"
            badge={true}
            des="my clear skin duo contains two power-packed formulas for clear, balanced, and smooth skin. featuring my clarifying exfoliating toner that works to balance and exfoliate the skin without drying it out, and my clarifying serum, a 3-in-1 formula that promotes an even, brighter, healthy-looking complexion. they’re gentle, water-light, and great for all skin types, especially combination to oily skin."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img='https://kyliecosmetics.com/cdn/shop/products/KS_CCOL_CSERUM_21_Closed_gray_background_800x.jpg?v=1676678289'
            productName="Kylie Toner"
            price="250.00"
            color="Skin-Care"
            badge={true}
            des="my clarifying serum is a 3-in-1 formula that helps clarify, even skin tone, and smooth texture. this power-packed serum delivers triple skin-perfecting action over time: it works to minimize the appearance of pores, reduce imperfections, and improve the look of dark spots for a more balanced and even skin tone. this water-light, fast absorbing product is a must-have for clearer, healthy-looking skin."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img='https://kyliecosmetics.com/cdn/shop/files/011724_FoundationBundles_PowerPlushFoundationTrio_5bf7b51b-e1c0-4abc-94aa-cd8626f865dd_800x.jpg?v=1705447475'
            productName="Kylie Foundation"
            price="80.00"
            color="Foundations"
            badge={true}
            des="this trio is a makeup must-have featuring my power plush longwear foundation, foundation brush 01, and setting spray. use the ultra-soft foundation brush to seamlessly blend your preferred foundation shade, blurring fine lines, pores, and texture. next use the mattifying setting spray to instantly set and lock in makeup for all-day wear."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img='https://kyliecosmetics.com/cdn/shop/products/KJC_KVMASC_23_KV_Kylie_PDP_Black_01_WS_V2_e03c6d05-609c-486b-872d-7812a902d5f9_800x.jpg?v=1680637908'
            productName="Kylie Maskara"
            price="60.00"
            color="Maskaras"
            badge={false}
            des="get lifted, defined, and fuller lashes with my kylash volume mascara. featuring a clean and vegan formula that doesn’t compromise on performance, this mascara provides volume, length and holds curl."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img='https://kyliecosmetics.com/cdn/shop/products/KC-Blush-WinterKissed-CapOff_800x.jpg?v=1676400349'
            productName="Kylie Blush"
            price="60.00"
            color="Palettes"
            badge={false}
            des="my pressed blush powder delivers a long-lasting, velvet-matte flush of color. this lightweight, buildable formula effortlessly blends into skin for a comfortable, non-drying finish."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
