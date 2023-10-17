import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BachelorsHomeCard from "../../component/BechalorsHomeCard/BachelorsHomeCard";
import { SearchContext } from "../../context/SearchProvider";
import Loading from "../Loading/Loading";

const LatestBachelorsHome = () => {
  const { setType } = useContext(SearchContext);
  const { data: latestBachelosHomes = [], isLoading ,refetch} = useQuery({
    queryKey: ["latestBachelosHomes"],
    queryFn: async () => {
      const response = await fetch(
        "https://rent-home-server.vercel.app/latestBachelosHomes");
      const data = await response.json();
      return data;
    },
  });

  // const { data: bachelosHomes = []} = useQuery({
  //   queryKey: ["bachelosHomes"],
  //   queryFn: async () => {
  //     const response = await fetch("https://rent-home-server.vercel.app/bachelosHomes");
  //     const data = await response.json();
  //     return data;
  //   }
  // });

  if (isLoading && !latestBachelosHomes.length) return <Loading />;

  return (
    <div className="my-10 mt-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center">Latest Bachelors Home</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto my-10">
        {latestBachelosHomes.map((home) => (
          <BachelorsHomeCard key={home._id} home={home}></BachelorsHomeCard>
        ))}
        {isLoading && <Loading></Loading>}
      </div>

      <div className="text-center my-5">
        <Link to="/allHomes/bechalors" onClick={() => setType("bechalors")}>
          <button
            type="button"
            className="px-5 py-3 font-semibold space-x-1 bg-orange-500 text-white transition-colors duration-500 ease-in-out hover:bg-orange-600"
          >
            See all Bachelors Homes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestBachelorsHome;
