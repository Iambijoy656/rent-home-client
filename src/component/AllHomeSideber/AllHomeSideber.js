import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const AllHomeSideber = () => {
const [data:location=[]]=useQuery([

])

  return (
    <div className="mt-20 ">
      <div>
        <h2 className="text-2xl text-center font-bold">
          Find Your <span className="text-orange-500">Perfact</span> Home
        </h2>
      </div>
      <div class="flex-col gap-5 justify-between mt-8 ">
        <div className="mb-5">
          <NavLink
            to="/allHomes/bechelors"
            className={({ isActive }) =>
              isActive
                ? "font-medium  text-white  bg-orange-500 p-4 m-2"
                : "font-medium   text-gray-700 bg-gray-200 p-4 m-2"
            }
          >
            Bachelors Home
          </NavLink>
          <NavLink
            to="/allHomes/family"
            className={({ isActive }) =>
              isActive
                ? "font-medium  text-white  bg-orange-500 p-4 m-2"
                : "font-medium   text-gray-700 bg-gray-200 p-4 m-2"
            }
          >
            Family Home
          </NavLink>
        </div>
      <form>
      <select className="select border-orange-500  w-full border-2 max-w-xs my-4 focus:outline-none">
      <option disabled selected>
        Location
      </option>
      <option>Mirpur</option>
      <option>Wari</option>
      <option>Mohakhali</option>
    </select>
    <select className="select border-orange-500 h w-full border-2 max-w-xs my-2 focus:outline-none">
      <option disabled selected>
        Type
      </option>
      <option>bechelors</option>
      <option>family</option>
    </select>
      </form>

        <div className="text-center my-5">
          <Link to="allHomes">
            <button
              type="button"
              className="px-8 py-4 font-semibold space-x-1 uppercase bg-orange-500 text-white transition-colors duration-500 ease-in-out hover:bg-orange-600"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllHomeSideber;
