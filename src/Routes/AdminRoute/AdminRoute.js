import React, { useContext } from "react";
import Loading from "../../pages/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../context/AuthProvider";


const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading></Loading>
  }

  if (user && isAdmin) {
    return children;
  }
  logOut()
    .then(() => {})
    .catch(() => {});
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;