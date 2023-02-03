import React from "react";
import { Outlet } from "react-router-dom";
import AllHomeSideber from "../component/AllHomeSideber/AllHomeSideber";
import Navber from "../Shared/Navber/Navber";

const AllHomeLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="flex gap-5 mt-16 sticky top-0 mx-auto max-w-[96%] ">
        <AllHomeSideber></AllHomeSideber>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AllHomeLayout;
