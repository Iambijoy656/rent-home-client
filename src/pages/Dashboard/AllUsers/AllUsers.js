import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://rent-home-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://rent-home-server.vercel.app/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successfully");
          refetch();
        }
      });
  };

  const handleDeleteUser = (email) => {
    fetch(`https://rent-home-server.vercel.app/user-delete/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`User deleted successfully`);
          refetch();
        }
      });
  };

  return (
    <div className="my-5 ml-5 ">
      <h2 className="text-2xl font-medium text-gray-600 mb-3">All Users</h2>
      <div className="overflow-x-auto bg-white text-gray-600">
        <table className="table w-full bg-white">
          <thead className="bg-white">
            <tr>
              <th className="bg-white"></th>
              <th className="bg-white">Name</th>
              <th className="bg-white">Email</th>
              <th className="bg-white">Role</th>
              <th className="bg-white">Admin</th>
              <th className="bg-white">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th className="bg-white">{i + 1}</th>
                <td className="bg-white">{user.name}</td>
                <td className="bg-white">{user.email}</td>
                <td className="bg-white">{user.role}</td>
                <td className="bg-white">
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-outline btn-accent"
                    >
                      Make admin
                    </button>
                  )}
                </td>
                <td className="bg-white">
                  <button
                    onClick={() => handleDeleteUser(user.email)}
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
  );
};

export default AllUsers;
