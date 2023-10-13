import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyRentHome = () => {
  const { user } = useContext(AuthContext);

  const url = `https://rent-home-server.vercel.app/rentHomes?email=${user?.email}`;

  const { data: rentHomes = [] } = useQuery({
    queryKey: ["rentHomes", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  return (
    <div className="my-5 ml-5 ">
      <h2 className="text-2xl font-medium text-gray-600 mb-3">My Rent Home</h2>
      <div className="overflow-x-auto bg-white text-gray-600">
        <table className="table w-full bg-white">
          <thead className="bg-white">
            <tr>
              <th className="bg-white"></th>
              <th className="bg-white">Name</th>
              <th className="bg-white">Email</th>
              <th className="bg-white">Home ID</th>
              <th className="bg-white">Rent</th>
              <th className="bg-white">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {rentHomes?.map((home, i) => (
              <tr key={home._id}>
                <th className="bg-white">{i + 1}</th>
                <td className="bg-white">{home.name}</td>
                <td className="bg-white">{home.email}</td>
                <td className="bg-white">{home.bookHomeId}</td>
                <td className="bg-white">{home.rent} tk</td>
                <td className="bg-white">{home.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRentHome;
