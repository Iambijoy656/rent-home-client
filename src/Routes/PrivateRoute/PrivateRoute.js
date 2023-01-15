import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center my-10">
            <MoonLoader color="#f97316" size={60}/>
            </div>
        );
    }



 if(user) {
    return children
 }
 return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
