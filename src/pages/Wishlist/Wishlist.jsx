import React, { useContext } from "react";
import WishListCard from "../../component/WishListCard/WishListCard";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Wishlist = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5001/wishlistHome?email=${user?.email}`;

  const { data: wishlist = [], refetch } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    
    },
  });




  return (
    <section className="pb-20  bg-white mb-10">
      <h2 className="text-3xl mb-6 tracking-wide font-bold text-center pt-10">
        Wishlist
      </h2>
      {wishlist.length > 0 ? (
        <div className="overflow-x-auto bg-white container mx-auto text-gray-600">
          <table className="table w-full bg-white text-center ">
            <thead className="">
              <tr>
    
                <th className="bg-gray-100">Image</th>
                <th className="bg-gray-100">Details</th>
                <th className="bg-gray-100">Price</th>
                <th className="bg-gray-100">Payment</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {wishlist?.map((home, i) => (
                <WishListCard home={home} key={home.id} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="">
          <p className="text-red-400 text-sm bg-red-200 p-3 rounded-md my-10">
            Wishlist is empty!
          </p>
        </div>
      )}
    </section>
  );
};

export default Wishlist;
