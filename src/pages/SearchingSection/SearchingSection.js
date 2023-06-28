import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchProvider";

const SearchingSection = () => {
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

  // const [filteringHome, SetFilteringHome] = useState([]);
  /*
  const searchHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const address = form.location.value.toLowerCase();
    const district = form.district.value.toLowerCase();
    const type = form.type.value.toLowerCase();

    const query = { address, district, type };

    fetch("http://localhost:5001/filterHome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((response) => response.json())
      .then((data) => {
        SetFilteringHome(data);
      });
  };
*/
  //common location
  const { data: locations = [] } = useQuery({
    queryKey: ["location"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5001/commonLocation");
      const data = await res.json();
      return data;
    },
  });

  //common district
  const { data: districts = [] } = useQuery({
    queryKey: ["districts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5001/commonDistrict");
      const data = await res.json();
      return data;
    },
  });

  return (
    <form className="py-6 bg-[#f2f6f7] text-gray-500 flex justify-around flex-col">
      <div className="container mx-auto grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 justify-around p-4 text-center md:p-10 lg:flex-row">
        <select
          onChange={(e) => setLocation(e.target.value)}
          name="location"
          className="select rounded-none select-lg w-full px-12 max-w-xl"
        >
          <option disabled selected>
            Location
          </option>
          {locations?.map((location, index) => (
            <option defaultValue={location} key={index}>
              {location}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setDistrict(e.target.value)}
          name="district"
          className="select select-lg w-full px-12 max-w-xl rounded-none"
        >
          <option defaultValue="" disabled selected>
            District
          </option>
          {districts?.map((district, index) => (
            <option defaultValue={district} key={index}>
              {district}
            </option>
          ))}
        </select>

        <select
          required
          onChange={(e) => setType(e.target.value)}
          name="type"
          className="select select-lg w-full px-10 max-w-xl rounded-none"
        >
          <option defaultValue="" disabled selected>
            Type
          </option>
          <option defaultValue="family">family</option>
          <option defaultValue="bechalors">bechalors</option>
        </select>

        <Link to={`/allHomes/${type}`}>
          <div className=" items-center justify-center space-x-1 hidden md:hidden lg:block mt-5 lg:ml-[350px] xl:ml-[460px]">
            <button
              disabled={!type || !location || !district == true}
              // style={(!type && !location && !district==true)}
              onClick={() => setSubmitOn(!submitOn)}
              type="submit"
              className="px-16 py-5 font-semibold uppercase space-x-1 bg-orange-500 text-white transition-colors duration-500 ease-in-out cursor-pointer hover:bg-orange-600 disabled:bg-orange-400 cursor-auto"
            >
              Search
            </button>
          </div>
        </Link>
      </div>
      <Link to={`/allHomes/${type}`}>
        <div className=" flex items-center justify-center lg:hidden">
          <button
            disabled={!type || !location || !district == true}
            onClick={() => setSubmitOn(!submitOn)}
            type="submit"
            className="px-10 py-5 h-full font-semibold uppercase space-x-1 bg-orange-500 text-white"
          >
            Search
          </button>
        </div>
      </Link>
    </form>
  );
};

export default SearchingSection;
