import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/Loading/Loading";
import useOwner from "../../hooks/useOwner";
import { AuthContext } from "../../context/AuthProvider";

const OwnerRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isOwner, isOwnerLoading] = useOwner(user?.email);
  const location = useLocation();

  if (loading || isOwnerLoading) {
    return <Loading></Loading>;
  }

  if (user && isOwner) {
    return children;
  }
  logOut()
    .then(() => {})
    .catch(() => {});
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default OwnerRoute;
