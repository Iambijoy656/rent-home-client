import React from "react";
import { useLoaderData } from "react-router-dom";

const HomeDetails = () => {
  const details = useLoaderData();

  const {
    image,
    address,
    available,
    district,
    need_room_mates,
    gender,
    date,
    rent,
    room_type,
    owner_number,
    owner_name,
    description,
  } = details;
  
  return (
    <section>
      <div>
        <h1 className="text-center text-5xl text-orange-500 font-semibold my-3 mb-6 ">
          Book Your comfort Home
        </h1>
      </div>
      <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="image1"
              src={image[0]}
              class="object-cover w-full aspect-square rounded-xl"
            />

            <div class="grid grid-cols-2 gap-4 lg:mt-4">
              <img
                alt="Les Paul"
                src={image[1]}
                class="object-cover w-full aspect-square rounded-xl"
              />

              <img
                alt="Les Paul"
                src={image[2]}
                class="object-cover w-full aspect-square rounded-xl"
              />
            </div>
          </div>

          <div class="sticky top-0">
            <strong class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              Home Details
            </strong>

            <div class="flex justify-between mt-8">
              <div class="max-w-[35ch]">
                <h1 class="text-2xl font-bold">Owner Name : {owner_name}</h1>

                <p class="mt-0.5 text-sm">Best Home</p>

                <div class="mt-2 -ml-0.5 flex">
                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="w-5 h-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p class="text-xl font-bold">
                {rent} <span className="text-xs text-gray-500">Tk/month</span>
              </p>
            </div>

            <details class="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
              <summary class="block">
                <div>
                  <div class="prose max-w-none group-open:hidden">
                    <p>{description.slice(0, 170)}...</p>
                  </div>

                  <span class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Read More
                  </span>
                </div>
              </summary>

              <div class="pb-6 prose max-w-none">
                <p>{description.slice(0, 165)}</p>

                <p>{description.slice(165)}</p>
              </div>
            </details>

            <form class="mt-5">
              <div className="p-5">
                <div className="flex  justify-between items-center">
                  <p className="inline">
                    <span className="font-semibold text-gray-500">
                      {" "}
                      Open For:{" "}
                    </span>
                    {need_room_mates} {gender}
                  </p>
                </div>

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
                </div>

                <div className="w-full mt-2 text-gray-500 flex  justify-between items-center">
                  <p>
                    <span className="font-semibold">Owner No: </span>
                    {owner_number}
                  </p>
                  <p>
                    <span className="font-semibold">Name:</span> {owner_name}
                  </p>
                </div>
              </div>

              <div class="flex mt-8">
                <button
                  type="submit"
                  class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-orange-500 rounded hover:bg-orange-600 hover:transition ease-in-out duration-150"
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDetails;
