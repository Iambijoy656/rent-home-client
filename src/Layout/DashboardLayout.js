import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// import useAdmin from '../hooks/useAdmin';

import { AuthContext } from "../context/AuthProvider";
import Navber from "../Shared/Navber/Navber";

const DashboardLayout = () => {
  //   const { user } = useContext(AuthContext);
  // const [isAdmin] = useAdmin(user.email)
  return (
    <div>
      <div className="border-b">
        <Navber></Navber>
      </div>
      <div className="drawer drawer-mobile lg:container mx-auto lg:max-w-screen-xl">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border border-l-0">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-base-100 lg:bg-none w-80 text-base-content">
            <li>
              <Link to="/dashboard/myRentHome">My Rent Home</Link>
            </li>
            <li>
                <Link to='/dashboard/myProfile'>MyProfile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
