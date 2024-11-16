import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Root";
import DragonNewsHome from "../components/home/newshome/DragonNewsHome";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Navigate to="/category/01"></Navigate>,
          },
          {
            path: "/category/:categoryId",
            element: <DragonNewsHome />,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params?.categoryId}`
              ),
          },
        ],
      },
      {
        path: "/category/:categoryId/newsDetails/:detailsId",
        element: (
          <PrivateRouter>
            <Details />{" "}
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/${params.detailsId}`
          ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
