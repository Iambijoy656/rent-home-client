import { createBrowserRouter } from "react-router-dom";
import AllHomeLayout from "../../Layout/AllHomeLayout";
import Main from "../../Layout/Main";
import About from "../../pages/About/About";
import AllHome from "../../pages/AllHomePage/AllHome";
import Bachelors from "../../pages/AllHomePage/Bachelors/Bachelors";
import Family from "../../pages/AllHomePage/Family/Family";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home/Home";
import FamilyHomeDetails from "../../pages/HomeDetails/FamilyHomeDetails";
import BachelorsHomeDetails from "../../pages/HomeDetails/BachelorsHomeDetails";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import Dashboard from "../../pages/Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyRentHome from "../../pages/Dashboard/MyRentHome/MyRentHome";
import MyProfile from "../../pages/Dashboard/MyProfile/MyProfile";
import Payment from "../../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/bachelorsHomeDetails/:id",
        element: <BachelorsHomeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/bachelosHomesDetails/${params.id}`),
      },
      {
        path: "/familyHomeDetails/:id",
        element: <FamilyHomeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/familyHomesDetails/${params.id}`),
      },
    ],
  },
  {
    path: "/allHomes",
    element: <AllHomeLayout />,
    children: [
      {
        path: "/allHomes",
        element: <AllHome />,
      },
      {
        path: "/allHomes/bechalors",
        element: <Bachelors />,
      },
      {
        path: "/allHomes/family",
        element: <Family />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myRentHome",
        element: <MyRentHome></MyRentHome>,
      },
      {
        path: "/dashboard/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/home/${params.id}`),
      },
    ],
  },
]);
