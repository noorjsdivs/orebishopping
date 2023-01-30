import React from "react";

const ProductInfo = ({ productInfo }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <p className="w-full h-14 flex items-center justify-between bg-white">
        <span className="w-14 h-full text-2xl flex items-center justify-center hover:bg-gray-200 duration-300 cursor-pointer">
          -
        </span>
        1
        <span className="w-14 h-full text-2xl flex items-center justify-center hover:bg-gray-200 duration-300 cursor-pointer">
          +
        </span>
      </p>
      <button className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont">
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
