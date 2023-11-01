import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useOwner from "../../../hooks/useOwner";
import useRenter from "../../../hooks/useRenter";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isOwner] = useOwner(user.email);
  const [isRenter] = useRenter(user.email);

  const url = `http://localhost:5001/userData?email=${user?.email}`;

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    // <div className="">
    //   <h2 className="text-3xl text-black my-3 ml-2 text-center mt-5">
    //     My Profile
    //   </h2>
    //   <div className=" min-w-screen flex justify-center w-full ">
    //     <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
    //       <div className="mt-6">
    //         <h2 className="text-gray-700 text-xl font-semibold ">
    //           Name: {user.displayName}
    //         </h2>
    //         <p className="text-gray-600 text-md mt-2 font-semibold">
    //           <span className="text-gray-500 text-sm mr-2"> Role:</span>
    //           {(isAdmin && " Admin") ||
    //             (isOwner && " Home Owner") ||
    //             (isRenter && " Renter")}
    //         </p>
    //       </div>

    //       <div className="my-6">
    //         <h2 className="text-gray-700 text-sm font-semibold uppercase">
    //           Contact Information
    //         </h2>
    //         <ul className="mt-2 leading-relaxed">
    //           <li className="flex items-center text-gray-600">
    //             <svg
    //               className="w-4 h-4 mr-2 fill-current text-gray-400"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M21.707 2.293a1 1 0 0 0-1.414 0L8 14.586V9a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1h10a1 1 0 0 0 0-2H9.414l12.293-12.293a1 1 0 0 0 0-1.414z" />
    //             </svg>
    //             {user.email}
    //           </li>
    //         </ul>
    //       </div>

    //       <Link to={`/dashboard/update-profile/`} className="mt-6 bg-orange-500 hover:bg-orange-800 transition duration-200 selection: p-2 rounded-md text-white">Update Profile</Link>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="flex  mb-5">
        <h2 className="text-2xl px-5 font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500">
          Details
        </h2>
      </div>
      <div className="bg-gray-100 pb-10">
        <div className="w-full text-white bg-main-color"></div>
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2">
            {/* Left Side */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* Profile Card */}
              <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrANb8UqDbeIYuPvSmU0eLbgUtdCxiPXylNQ_OhJ3IuvdlyUqUgwvhsuS6F1qSAGtOsK4&usqp=CAU"
                    alt="Profile"
                  />
                </div>
                <div className="flex flex-col justify-center items-center mt-1">
                  <h1 className="text-gray-900 font-semibold text-sm ">
                    {userData._id}
                  </h1>
                  <h1 className="text-gray-900 font-bold text-xl ">
                    {userData.name}
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">{userData.name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Father Name</div>
                      {userData?.fatherName && (
                        <div className="px-4 py-2">{userData?.fatherName}</div>
                      )}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Mother Name</div>
                      {userData?.motherName && (
                        <div className="px-4 py-2">{userData?.motherName}</div>
                      )}
                    </div>{" "}
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Father Occupation
                      </div>
                      {userData?.fatherOccupation && (
                        <div className="px-4 py-2">
                          {userData?.fatherOccupation}
                        </div>
                      )}
                    </div>{" "}
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Mother Occupation
                      </div>
                      {userData?.motherOccupation && (
                        <div className="px-4 py-2">
                          {userData?.motherOccupation}
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      {userData?.number && (
                        <div className="px-4 py-2">{userData?.number}</div>
                      )}
                    </div>{" "}
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Father Contact No.
                      </div>
                      {userData?.fatherContactNo && (
                        <div className="px-4 py-2">
                          {userData?.fatherContactNo}
                        </div>
                      )}
                    </div>{" "}
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Mother Contact No.
                      </div>
                      {userData?.motherContactNo && (
                        <div className="px-4 py-2">
                          {userData?.motherContactNo}
                        </div>
                      )}
                    </div>{" "}
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Emergency Contact No.
                      </div>
                      {userData?.emergencyContactNo && (
                        <div className="px-4 py-2">
                          {userData?.emergencyContactNo}
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Present Address
                      </div>
                      {userData?.presentAddress && (
                        <div className="px-4 py-2">
                          {userData?.presentAddress}
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Permanent Address
                      </div>
                      {userData?.permanentAddress && (
                        <div className="px-4 py-2">
                          {userData?.permanentAddress}
                        </div>
                      )}
                    </div>{" "}
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Mailling Address
                      </div>
                      {userData?.maillingAddress && (
                        <div className="px-4 py-2">
                          {userData?.maillingAddress}
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      {userData?.email && (
                        <div className="px-4 py-2">
                          <Link
                            to={"https://mail.google.com/"}
                            target="_blank"
                            className="text-blue-800"
                            href="mailto:jane@example.com"
                          >
                            {userData?.email}
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2 mb-8">
                      <div className="px-4 ml-4 py-2 font-semibold">Birthday</div>
                      {userData?.dateOfBirth && (
                        <div className="px-4 py-2">{userData?.dateOfBirth}</div>
                      )}
                    </div>{" "}
                  </div>
                </div>
                <Link
                  to={`/dashboard/update-profile/`}
                  className="bg-blue-500  text-white font-semibold px-6 py-2 mt-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
