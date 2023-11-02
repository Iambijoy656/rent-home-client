import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/feature/Whishlist/WhichlistSlice";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import { useQueryClient } from "@tanstack/react-query";
import ReviewForm from "../../component/ReviewForm/ReviewForm";

const FamilyHomeDetails = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);
  const details = useLoaderData();

  //   console.log(homeDetails);
  const {
    _id,
    image,
    address,
    email,
    vedio,
    district,
    date,
    rent,
    room_type,
    owner_number,
    owner_name,
    description,
  } = details;

  const handleAddToWishlist = (home) => {
    if (!user?.email) {
      navigate("/login");
    }
    const wishlistData = {
      renterEmail: user.email,
      wishlistHome: home,
    };

    fetch(`http://localhost:5001/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          fetch(`http://localhost:5001/wishlist/${home._id}`, {
            method: "PATCH",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                toast.success("Home added to the wishlist successfully");

                // Trigger a refetch of the specific query
                queryClient.invalidateQueries("yourQueryKey");
              }
            });
        } else {
          toast.error("This Home is already in the wishlist");
        }
      });
  };

  return (
    <section>
      <div>
        <h1 className="text-center text-5xl text-orange-500 font-semibold my-3 mb-6 ">
          Book Your comfort Home
        </h1>
      </div>
      <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="image1"
              src={image[0]}
              className="object-cover w-full aspect-square rounded-xl"
            />

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <img
                alt="Les Paul"
                src={image[1]}
                className="object-cover w-full aspect-square rounded-xl"
              />

              <img
                alt="Les Paul"
                src={image[2]}
                className="object-cover w-full aspect-square rounded-xl"
              />
              {vedio && (
                <video controls className=" col-span-2">
                  <source
                    src={vedio}
                    // type="video/mp4"
                  />
                </video>
              )}
            </div>
          </div>

          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              Home Details
            </strong>

            <div className="flex justify-between mt-8">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl font-bold">
                  Owner Name : {owner_name}
                </h1>

                <p className="mt-0.5 text-sm">Best Home</p>

                <div className="mt-2 -ml-0.5 flex">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p className="text-xl font-bold">
                {rent} <span className="text-xs text-gray-500">Tk/month</span>
              </p>
            </div>

            <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="block">
                <div>
                  <div className="prose max-w-none group-open:hidden">
                    <p>{description.slice(0, 170)}...</p>
                  </div>

                  <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Read More
                  </span>
                </div>
              </summary>

              <div className="pb-6 prose max-w-none">
                <p>{description.slice(0, 165)}</p>

                <p>{description.slice(165)}</p>
              </div>
            </details>

            <form className="mt-5">
              <div className="p-5">
                <div className="w-full mt-2 text-gray-500 flex  justify-between items-center">
                  <p>
                    <span className="font-semibold"> Address : </span>
                    {address},{district}
                  </p>
                  <p>
                    <span className="font-semibold">Post date:</span> {date}
                  </p>
                </div>

                <div className="w-full mt-2 text-gray-500 flex  justify-between items-center">
                  <p>
                    <span className="font-semibold"> Room type: </span>
                    {room_type}
                  </p>
                  <p>
                    <span className="font-semibold">Name:</span> {owner_name}
                  </p>
                </div>

                <div className="w-full mt-2 text-gray-500 flex  justify-between items-center">
                  <p>
                    <span className="font-semibold">Owner No: </span>
                    {owner_number}
                  </p>

                  <p>
                    <span className="font-semibold">Email:</span> {email}
                  </p>
                </div>
              </div>

              {rent && !details.paid && (
                <div className="flex items-center  gap-5 mt-8">
                  <Link to={`/dashboard/payment/${_id}`}>
                    <button
                      type="submit"
                      className="block px-5 py-3 ml-3  font-bold text-white bg-orange-500 rounded hover:bg-orange-600 hover:transition ease-in-out duration-150"
                    >
                      Advance pay for rent
                    </button>
                  </Link>

                  <p onClick={() => handleAddToWishlist(details)}>
                    <AiFillHeart
                      className="text-orange-500 hover:shadow-lg hover:shadow-orange-400 cursor-pointer"
                      size={44}
                    />
                  </p>
                </div>
              )}
              {rent && details.paid && (
                <div className="flex  mt-8">
                  <Link>
                    <button
                      type="submit"
                      className="block px-5 py-3 ml-3  font-bold text-white bg-green-500 rounded hover:bg-green-600 hover:transition ease-in-out duration-150"
                    >
                      Already paid
                    </button>
                  </Link>
                </div>
              )}
            </form>

            {/* Revirew section */}
            {/* <div className="mt-10">
              <div>
                <p className="text-black text-md font-semibold tracking-wider mt-3 ">
                  SUBMIT YOUR REVIEW
                </p>

                <ReviewForm home={details} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyHomeDetails;
