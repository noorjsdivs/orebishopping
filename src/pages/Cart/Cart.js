import React from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ItemCard from "./ItemCard";

const Cart = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      <div className="pb-20">
        <div className="w-full h-20 bg-[#F5F7F7] text-primeColor grid grid-cols-4 place-content-center px-6 text-lg font-titleFont font-semibold">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Sub Total</h2>
        </div>
        <div>
          {products.map((item) => (
            <div key={item._id}>
              <ItemCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
