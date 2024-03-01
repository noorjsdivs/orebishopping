import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";


const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img='https://viviennesabo.ru/upload/iblock/6f2/6f20c29a7e986ba0ae368e23df7c613e.jpg'
          productName="Viviene Sabo"
          price="35.00"
          color="Lip Balm"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1102"
          img='https://viviennesabo.ru/upload/iblock/fa7/w4t41s1orz5k2kl089ylgrgltkuv2hj8.jpg'
          productName="Viviene Sabo"
          price="180.00"
          color="Eye balm"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1103"
          img='https://viviennesabo.ru/upload/iblock/945/ff579h39aqwvd9kp8ug11ll1tejd81jk.jpg'
          productName="Fixateur Superb"
          price="25.00"
          color="Palettes"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1104"
          img='https://viviennesabo.ru/upload/iblock/6c7/nm6bfw06l6cyrujehs7985xbpmjcvfqs.jpg'
          productName="Brow Fixing Gel"
          price="220.00"
          color="Brows"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
