import React from "react";
import { Link } from "react-router-dom";

const WishListCard = ({ home }) => {

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
  } = home.wishlistHome;

  console.log(home.wishlistHome)
  return (
    <tr>
      <td className="bg-white">
        {" "}
        <img className="w-44 h-20" src={image[0]} alt="" />
      </td>
      <td className="bg-white text-blue-500">
        <Link
            to={`/bachelorsHomeDetails/${home?.wishlistHome?._id}`}
          className="bg-white text-blue-500 hover:text-warning"
        >
          Show Home details
        </Link>
      </td>

      <td className="bg-white">{rent}</td>
    

      <td className="bg-white ">
        <Link to={`/dashboard/payment/${_id}`}>
          <button
            type="submit"
            className="px-5 py-3 ml-3    font-bold text-white bg-orange-500 rounded hover:bg-orange-600 hover:transition ease-in-out duration-150"
          >
            Advance pay for rent
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default WishListCard;
