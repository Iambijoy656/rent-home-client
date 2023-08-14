import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ShowAllHome = () => {
  const { data: allHomes = [], refetch } = useQuery({
    queryKey: ["allHomes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5001/allHomes");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  //Handle Delete home from DB
  const handleDelete = (home) => {
    fetch(`http://localhost:5001/delete-home/${home._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(` Deleted Home successfully`);
        }
      });
  };

  return (
    <div>
      <div className="my-5 ml-5 ">
        <h2 className="text-2xl font-medium text-gray-600 mb-3">All Homes</h2>
        <div className="overflow-x-auto bg-white text-gray-600">
          <table className="table w-full bg-white">
            <thead className="bg-white">
              <tr>
                <th className="bg-white"></th>
                <th className="bg-white">Id</th>
                <th className="bg-white">Owner Name</th>
                <th className="bg-white">Email</th>
                <th className="bg-white">Number</th>
                <th className="bg-white">Room Type</th>
                <th className="bg-white">Post Date</th>
                <th className="bg-white">Available Status</th>
                <th className="bg-white">Details</th>
                <th className="bg-white">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allHomes?.map((home, i) => (
                <tr key={home._id}>
                  <th className="bg-white">{i + 1}</th>
                  <td className="bg-white">{home._id}</td>
                  <td className="bg-white">{home.owner_name}</td>
                  <td className="bg-white">{home.email}</td>
                  <td className="bg-white">{home.owner_number}</td>
                  <td className="bg-white">{home.type}</td>
                  <td className="bg-white">{home.date}</td>
                  <td className="bg-white ">
                    {home?.available === true ? "Available" : "Not Availble"}
                  </td>
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
      </div>
    </div>
  );
};

export default ShowAllHome;
