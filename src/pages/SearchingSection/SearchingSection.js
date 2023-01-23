import React from "react";

const SearchingSection = () => {
  return (
    <section className="py-6 bg-[#f2f6f7] text-gray-500 flex justify-around flex-col">
      <div className="container mx-auto grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 justify-around p-4 text-center md:p-10 lg:flex-row">
        <select className="select rounded-none select-lg w-full px-12 max-w-xl">
          <option disabled selected>
            Location
          </option>
          <option>Wari</option>
          <option>Mirpur</option>
        </select>

        <select className="select select-lg w-full px-12 max-w-xl rounded-none">
          <option disabled selected>
            Type
          </option>
          <option>Family</option>
          <option>Bachelors</option>
        </select>
        <div className="items-center justify-center hidden md:hidden lg:block">
          <button
            type="button"
            className="px-8 py-5 font-semibold uppercase space-x-1 bg-orange-500 text-white transition-colors duration-500 ease-in-out hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center lg:hidden">
        <button
          type="button"
          className="px-8 py-5 h-full font-semibold uppercase space-x-1 bg-orange-500 text-white"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchingSection;
