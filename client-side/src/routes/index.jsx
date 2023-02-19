import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Products from "../pages/Products";
import Navbar from "../components/Navbar";
import Layout from "../pages/Layout";
import DetailProduct from "../pages/DetailProduct";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/product/:slugProduct",
        element: <DetailProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

// rhf form react

export default router;
