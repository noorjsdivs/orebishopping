import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="bg-[#f3f3f3] w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center items-center text-black">
        <div className="aspect-w-4 aspect-h-3 w-full mb-4">
          <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
        </div>
        <div className="text-left h-140 md:h-200 lg:h-260 w-full mx-4 ">
          <div className="mx-8">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              Imprimante sales
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Up to{" "}
              <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
                30%
              </span>{" "}
              sales for all impriamnte{" "}
            </p>
            <div className=" mb-8">
              <ShopNow />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={saleImgThree}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
