import React, { useState } from "react";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useParams } from "react-router-dom";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

const Offer = () => {
  const [prevLocation] = useState("");
  const { category } = useParams();

  return (
    // <div className="max-w-container mx-auto">
    //   <Breadcrumbs title={category} prevLocation={prevLocation} />
    //   <div className="pb-10">
    //     <SpecialOffers />
    //   </div>
    // </div>

    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title={category} prevLocation={prevLocation} />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <SpecialOffers />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Offer;
