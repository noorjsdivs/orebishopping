import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="w-full grid grid-cols-4 mb-4">
      <div className="flex items-center gap-2">
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>
      <div className="flex items-center text-lg font-semibold">
        ${item.price}
      </div>
      <div className="flex items-center gap-6 text-lg">
        <span className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300">
          -
        </span>
        <p>{item.quantity}</p>
        <span className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300">
          +
        </span>
      </div>
      <div className="flex items-center font-titleFont font-bold text-lg">
        <p>${item.quantity * item.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
