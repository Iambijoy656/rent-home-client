import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="flex items-center justify-center mt-20 h-full p-16 bg-white text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>
            {error.status}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            {error.statusText}
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 font-semibold rounded bg-orange-400 text-gray-900"
          >
            <button onClick={handleLogOut}> Log Out</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DisplayError;
