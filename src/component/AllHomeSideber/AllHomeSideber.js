import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SearchContext } from "../../context/SearchProvider";

const AllHomeSideber = () => {
  const {
    location,
    setLocation,
    district,
    setDistrict,
    type,
    setType,
    submitOn,
    setSubmitOn,
  } = useContext(SearchContext);

  //common location
  const { data: locations = [] } = useQuery({
    queryKey: ["location"],
    queryFn: async () => {
      const res = await fetch(
        "https://rent-home-server.vercel.app/commonLocation"
      );
      const data = await res.json();
      return data;
    },
  });

  //common district
  const { data: districts = [] } = useQuery({
    queryKey: ["districts"],
    queryFn: async () => {
      const res = await fetch(
        "https://rent-home-server.vercel.app/commonDistrict"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mt-20 ">
      <div>
        <h2 className="text-2xl text-center font-bold ml-[-45px]">
          Find Your <span className="text-orange-500">Perfact</span> Home
        </h2>
      </div>
      <div className="flex-col gap-5 justify-between mt-8">
        <div className="mb-5">
          <NavLink
            to="/allHomes/bechalors"
            onClick={() => setType("bechalors")}
            className={({ isActive }) =>
              isActive
                ? "font-medium text-white bg-orange-500 p-4 m-2"
                : "font-medium text-gray-700 bg-gray-200 p-4 m-2"
            }
          >
            Bachelors Home
          </NavLink>
          <NavLink
            to="/allHomes/family"
            onClick={() => setType("family")}
            className={({ isActive }) =>
              isActive
                ? "font-medium  text-white bg-orange-500 p-4 m-2"
                : "font-medium  text-gray-700 bg-gray-200 p-4 m-2"
            }
          >
            Family Home
          </NavLink>
        </div>
        <form>
          <select
            onChange={(e) => setLocation(e.target.value)}
            name="location"
            className="select border-orange-500 w-full border-2 max-w-xs my-2 focus:outline-none bg-white text-black"
          >
            <option disabled selected>
              Location
            </option>
            {locations?.map((item, index) => (
              <option defaultValue={item} key={index}>
                {item}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setDistrict(e.target.value)}
            name="district"
            className="select border-orange-500  w-full border-2 max-w-xs my-2 focus:outline-none bg-white text-black"
          >
            <option disabled selected>
              District
            </option>
            {districts?.map((item, index) => (
              <option defaultValue={item} key={index}>
                {item}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setType(e.target.value)}
            name="type"
            className="select border-orange-500 h w-full border-2 max-w-xs my-2 focus:outline-none bg-white text-black"
          >
            <option disabled selected>
              Type
            </option>
            <option defaultValue="family">family</option>
            <option defaultValue="bechalors">bechalors</option>
          </select>
          <div className="text-center my-5">
            <Link to={`/allHomes/${type}`}>
              <button
                disabled={!type || !location || !district == true}
                onClick={() => setSubmitOn(!submitOn)}
                type="submit"
                className="px-16 py-5 font-semibold uppercase space-x-1 bg-orange-500 text-white transition-colors duration-500 ease-in-out cursor-pointer hover:bg-orange-600 disabled:bg-orange-400 cursor-auto"
              >
                Search
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AllHomeSideber;
