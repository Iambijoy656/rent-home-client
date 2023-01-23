import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Explore = () => {
  return (
    <div className="p-6 py-16 mb-16 bg-[#f97316] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-5xl tracking-tighter font-bold">
            Looking For a dream House?
          </h2>

          <div
            rel="noreferrer noopener"
            className="px-8 mt-4 lg:mt-0 py-5 flex flex-col lg:flex-row items-center justify-between  border-none bg-gray-50 text-gray-900 border-gray-400 hover:bg-black hover:text-white"
          >
            <p className="mx-2">Explore Dream Houses </p>
            <span>
              {" "}
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
