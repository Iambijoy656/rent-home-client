import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navber = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-medium  text-orange-600 underline underline-offset-2 transition-colors duration-200 bg-transparent"
              : "font-medium  text-gray-700 transition-colors duration-200 bg-transparent"
          }
          end
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-medium  text-orange-600 underline underline-offset-2 duration-200 bg-transparent "
              : "font-medium  text-gray-700 transition-colors duration-200 bg-transparent"
          }
          end
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-medium  text-orange-600 underline underline-offset-2 transition-colors duration-200 bg-transparent"
              : "font-medium  text-gray-700 transition-colors duration-200 bg-transparent"
          }
          end
        >
          Contact
        </NavLink>
      </li>

      {user?.uid ? (
        <>
          <li>
            <NavLink
              className=" text-gray-700 font-bold transition-colors duration-200 bg-transparent"
              title={user.displayName}
              end
            >
              {user?.displayName}
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleLogout}
              to="/logout"
              className={({ isActive }) =>
                isActive
                  ? "font-medium   text-orange-600 underline underline-offset-2 transition-colors duration-200 bg-transparent"
                  : "font-medium   text-gray-700 transition-colors duration-200 bg-transparent"
              }
              end
            >
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "font-medium   text-orange-600 underline underline-offset-2 transition-colors duration-200 bg-transparent"
                  : "font-medium   text-gray-700 transition-colors duration-200 bg-transparent"
              }
              end
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 justify-between max-w-[1440px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case font-bold text-xl">
          {" "}
          <span className="text-orange-500 text-2xl"> Rent </span> Home
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navber;
