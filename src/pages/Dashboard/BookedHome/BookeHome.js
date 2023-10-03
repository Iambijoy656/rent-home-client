import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const BookeHome = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5001/bookedHome?email=${user?.email}`;

  const { data: bookedHome = [], refetch } = useQuery({
    queryKey: ["bookedHome", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  console.log(bookedHome.matchedPayments)

  //Handle Delete home from DB
//   const handleDelete = (home) => {
//     fetch(`https://rent-home-server.vercel.app/delete-home/${home._id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.deletedCount > 0) {
//           refetch();
//           toast.success(` Deleted successfully`);
//         }
//       });
//   };
  return (
    <div className="my-5 ml-5 ">
      <h2 className="text-2xl font-medium text-gray-600 mb-3">Booked Home</h2>
      {bookedHome?.matchedPayments  ? (
        <div className="overflow-x-auto bg-white text-gray-600">
          <table className="table w-full bg-white">
            <thead className="bg-white">
              <tr>
                <th className="bg-white"></th>
                <th className="bg-white">Home ID</th>
                <th className="bg-white">Email</th>
                <th className="bg-white">Name</th>
                <th className="bg-white">Transaction ID</th>
                <th className="bg-white">Payment ID</th>
                <th className="bg-white">Rent Amount</th>
              </tr>
            </thead>
            <tbody>
              {bookedHome.matchedPayments?.map((home, i) => (
                <tr key={home._id}>
                  <th className="bg-white">{i + 1}</th>
                  <td className="bg-white">{home.bookHomeId}</td>
                  <td className="bg-white">{home.email}</td>
                  <td className="bg-white">{home.name}</td>
                  <td className="bg-white">{home.transactionId}</td>
                  <td className="bg-white">{home._id}</td>
                  <td className="bg-white">{home.rent}</td>
                  {/* <td className="bg-white">
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
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center font-bold text-red-600">Booked Home Empty</p>
      )}
    </div>
    //  <div className="relative">
    //        <div class="w-0 h-0 absolute -left-16
    //     border-l-[200px] border-l-transparent
    //     border-b-[300px] border-b-yellow-500
    //     border-r-[400px] border-r-transparent">
    //   </div>
    //  </div>
  );
};

export default BookeHome;
