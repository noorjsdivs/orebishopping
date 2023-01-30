import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Offer = () => {
  const [prevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto">
      <Breadcrumbs title="Offer" prevLocation={prevLocation} />
      <div className="pb-20">
        <h1 className="font-titleFont text-xl text-blue-600 font-semibold text-center">
          Right now there is no offer available.
        </h1>
      </div>
    </div>
  );
};

export default Offer;
