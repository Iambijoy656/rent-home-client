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
import HomeDetails from "../../pages/HomeDetails/HomeDetails";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        element: <HomeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/bachelosHomesDetails/${params.id}`),
      },
      {
        path: "/familyHomeDetails/:id",
        element: <FamilyHomeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/familyHomesDetails/${params.id}`),
      },
      // {
      //   path: "/allHomes",
      //   element:<AllHome/>
      // }
    ],
  },
  {
    path: "/allHomes",
    element: <AllHomeLayout />,
    children: [
      {
        path:"/allHomes",
        element: <AllHome />

      },
      {
        path: "/allHomes/bechelors",
        element: <Bachelors/>,
      },
      {
        path: "/allHomes/family",
        element:<Family/>,
      },
    ],
  },
]);
