import React from "react";
import { Link } from "react-router-dom";

const FamilyHomeCard = ({ home }) => {
  const {
    _id,
    image,
    address,
    available,
    district,
    date,
    rent,
    room_type,
    owner_number,
    owner_name,
    description,
  } = home;
  return (
    <div className="card bg-base-100 rounded-none shadow-xl">
      <figure>
        <img className="h-64 w-full " src={image[0]} alt="homes" />
      </figure>
      <div className="p-5">
        <div className="flex  justify-between items-center">
          <h2 className="card-title">
            {rent}
            <span className="text-xs text-gray-500">Tk/month</span>
            <div className="badge badge-error">New</div>
          </h2>
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
        <p className="text-gray-500 mt-2">
          {" "}
          <span className="font-semibold">Description:</span>
          {description.length > 170
            ? `${description.slice(0, 170)}...`
            : description}
        </p>
      </div>
      <div>
      <Link to={`/HomeDetails/${_id}`}>
      <button
      type="button"
      className="px-5 py-3 w-full font-semibold space-x-1 bg-orange-500 text-white transition-colors duration-500 ease-in-out hover:bg-orange-600"
    >
      Details
    </button>
      </Link>
      </div>
    </div>
  );
};

export default FamilyHomeCard;
