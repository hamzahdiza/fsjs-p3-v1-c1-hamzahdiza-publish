import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/categories",
        element: <Categories />,
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
