import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useRenter from "../../hooks/useRenter";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/Loading/Loading";

const  RenterRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isRenter, isRenterLoading]  = useRenter(user?.email)
  const location = useLocation();

  if (loading || isRenterLoading) {
    return <Loading></Loading>;
  }

  if (user && isRenter) {
    return children;
  }
  logOut()
    .then(() => {})
    .catch(() => {});
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default RenterRoute;
