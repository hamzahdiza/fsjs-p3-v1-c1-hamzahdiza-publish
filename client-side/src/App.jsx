// import { useState } from "react";
import { RouterProvider } from "react-router-dom";
// import Products from "./pages/Products";
// import Navbar from "./components/Navbar";
// import DetailProduct from "./pages/DetailProduct";
import router from "./routes";

import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
