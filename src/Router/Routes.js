import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Orders from "../Pages/Orders/Orders";
import Services from "../Pages/Service/Services/Services";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/Service/AddService/AddService";

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
        element: <Services></Services>,
      },
      {
        path: "addService",
        element: <AddService></AddService>
      },
      {
        path: "reviews",
        element: <MyReviews></MyReviews>
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://genius-car-server-nu-bice.vercel.app/services/${params.id}`),
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
