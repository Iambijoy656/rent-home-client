import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home/Home";
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
        path: "/HomeDetails/:id",
        element: <HomeDetails />,
        loader: ({ params }) =>fetch(`http://localhost:5001/bachelosHomesDetails/${params.id}`)
      },
    ],
  },
]);
