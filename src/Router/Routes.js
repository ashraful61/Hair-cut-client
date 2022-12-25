import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Signup from "../Pages/Signup/Signup";
import AddService from "../Pages/Service/AddService/AddService";
import AllServices from "../Pages/Service/AllServices/AllServices";
import ServiceDetails from "../Pages/Service/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "services",
        loader: async () => fetch('https://server-fawn-pi.vercel.app/services'),
        element: <AllServices></AllServices>,
      },
      {
        path: "addService",
        element: <AddService></AddService>
      },
      {
        path: "services/:id",
        loader: async ({params}) => fetch(`https://server-fawn-pi.vercel.app/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: "reviews",
        element: <MyReviews></MyReviews>
      },
    ],
  },
]);

export default router;
