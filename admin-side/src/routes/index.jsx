import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { redirect } from "react-router-dom";

// import Sidebar from "../components/Sidebar";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import Login from "../pages/Login";
import ImagePopup from "../components/ImagePopup";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import AddCategory from "../pages/AddCategory";
import RegisterAdmin from "../pages/RegisterAdmin";

const router = createBrowserRouter([
  {
    element: <Layout />,

    loader: () => {
      const access_token = localStorage.getItem("access_token");

      if (!access_token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/product/images",
        element: <ImagePopup />,
      },
      {
        path: "/product/add-product",
        element: <AddProduct />,
      },
      {
        path: "/product/edit-product",
        element: <EditProduct />,
      },
      {
        path: "/product/add-category",
        element: <AddCategory />,
      },
      {
        path: "/register-admin",
        element: <RegisterAdmin />,
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
