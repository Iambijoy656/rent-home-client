import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Navber from "../Shared/Navber/Navber";
import useAdmin from "../hooks/useAdmin";
import useOwner from "../hooks/useOwner";
import useRenter from "../hooks/useRenter";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isOwner] = useOwner(user.email);
  const [isRenter] = useRenter(user.email);
  return (
    <div>
      <div className="border-b bg-white">
        <Navber></Navber>
      </div>
      <div className="drawer drawer-mobile lg:container mx-auto lg:max-w-screen-xl">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-white">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border border-l-0  bg-white">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 text-black lg:bg-none w-80  bg-white">
            {isRenter && (
              <li>
                <Link to="/dashboard/myRentHome">My Rent Home</Link>
              </li>
            )}
            <li>
              <Link to="/dashboard/myProfile">MyProfile</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allUsers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/allHomes">All Homes</Link>
                </li>
              </>
            )}

            {isOwner && (
              <>
                <li>
                  <Link to="/dashboard/addhome">Add a Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/myHomeForRent">My Home For Rent</Link>
                </li>{" "}
                <li>
                  <Link to="/dashboard/bookedHome">Booked Home</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
