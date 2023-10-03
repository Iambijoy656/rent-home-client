import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyHomeForRent = () => {
  const { user } = useContext(AuthContext);

  const url = `https://rent-home-server.vercel.app/myHomesForRent?email=${user?.email}`;

  const { data: myHomesForRent = [], refetch } = useQuery({
    queryKey: ["myHomesForRent", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  //Handle Delete home from DB
  const handleDelete = (home) => {
    fetch(`https://rent-home-server.vercel.app/delete-home/${home._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(` Deleted successfully`);
        }
      });
  };

  return (
    <div className="my-5 ml-5 ">
      <h2 className="text-2xl font-medium text-gray-600 mb-3">
        My Home For Rent
      </h2>
      {myHomesForRent.length > 0 ? (
        <div className="overflow-x-auto bg-white text-gray-600">
          <table className="table w-full bg-white">
            <thead className="bg-white">
              <tr>
                <th className="bg-white"></th>
                <th className="bg-white">Home ID</th>
                <th className="bg-white">Email</th>
                <th className="bg-white">Post Date</th>
                <th className="bg-white">Type</th>
                <th className="bg-white">Details</th>
                <th className="bg-white">Delete Home</th>
              </tr>
            </thead>
            <tbody>
              {myHomesForRent?.map((home, i) => (
                <tr key={home._id}>
                  <th className="bg-white">{i + 1}</th>
                  <td className="bg-white">{home._id}</td>
                  <td className="bg-white">{home.email}</td>
                  <td className="bg-white">{home.date}</td>
                  <td className="bg-white">{home.type}</td>
                  <td className="bg-white">
                    <Link
                      to={`/bachelorsHomeDetails/${home._id}`}
                      className="btn btn-xs btn-outline btn-success"
                    >
                      Details
                    </Link>
                  </td>
                  <td className="bg-white">
                    <button
                      onClick={() => handleDelete(home)}
                      className="btn btn-xs btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center font-bold text-zinc-600">
          You Did not any post for rent home
        </p>
      )}
    </div>
  );
};

export default MyHomeForRent;
