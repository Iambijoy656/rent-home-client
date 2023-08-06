import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useOwner from "../../../hooks/useOwner";
import useRenter from "../../../hooks/useRenter";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isOwner] = useOwner(user.email);
  const [isRenter] = useRenter(user.email);

  return (
    <div className="">
      <h2 className="text-3xl text-black my-3 ml-2 text-center mt-5">
        My Profile
      </h2>
      <div className=" min-w-screen flex justify-center w-full ">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <div className="mt-6">
            <h2 className="text-gray-700 text-xl font-semibold ">
              Name: {user.displayName}
            </h2>
            <p className="text-gray-600 text-md mt-2 font-semibold">
              <span className="text-gray-500 text-sm mr-2"> Role:</span>
              {(isAdmin && " Admin") ||
                (isOwner && " Home Owner") ||
                (isRenter && " Renter")}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-gray-700 text-sm font-semibold uppercase">
              Contact Information
            </h2>
            <ul className="mt-2 leading-relaxed">
              <li className="flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.707 2.293a1 1 0 0 0-1.414 0L8 14.586V9a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1h10a1 1 0 0 0 0-2H9.414l12.293-12.293a1 1 0 0 0 0-1.414z" />
                </svg>
                {user.email}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
