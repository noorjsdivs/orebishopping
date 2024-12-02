import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2022 | Orebi shopping | All Rights Reserved |
          <a href="https://fptshop.com.vn/?gad_source=1&gclid=CjwKCAiAxqC6BhBcEiwAlXp45yqss8-EuSEfoxjWs-dVGMZUXucyziLedzGCJAMPqiOOx1K99Q3i1RoC_MAQAvD_BwE" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by fptshop.com
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
