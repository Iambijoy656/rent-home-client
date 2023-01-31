import { useQuery } from "@tanstack/react-query";
import React from "react";
import FamilyHomeCard from "../../component/FamilyHomeCard/FamilyHomeCard";
import Loading from "../Loading/Loading";

const LatestFamilyHome = () => {
  const { data: latestFAmilyHomes = [], isLoading } = useQuery({
    queryKey: ["latestFAmilyHomes"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5001/latestFamilyHomes");
      const data = await response.json();
      return data;
    },
  });

  if (isLoading && !latestFAmilyHomes.length ) return <Loading />;;

  return (
    <div className="my-10 mt-20 container mx-auto">
      <h2 className="text-3xl font-bold text-center">Latest Family Home</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto my-10">
        {latestFAmilyHomes.map((home) => (
          <FamilyHomeCard key={home.id} home={home}></FamilyHomeCard>
        ))}
        {isLoading && <Loading></Loading>}
      </div>

      <div className="text-center my-5">
        <button
          type="button"
          className="px-5 py-3 font-semibold space-x-1 bg-orange-500 text-white transition-colors duration-500 ease-in-out hover:bg-orange-600"
        >
          See all Family Homes
        </button>
      </div>
    </div>
  );
};

export default LatestFamilyHome;
