import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Products from "../pages/Products";
import Navbar from "../components/Navbar";
import Layout from "../pages/Layout";
import DetailProduct from "../pages/DetailProduct";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/product/:productId",
        element: <DetailProduct />,
      },
    ],
  },
]);

// rhf form react

export default router;
