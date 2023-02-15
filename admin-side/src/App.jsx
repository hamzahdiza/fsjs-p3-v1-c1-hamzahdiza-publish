import { useState } from "react";
import "./App.css";
// import Dashboard from "./pages/Dashboard";
// import Sidebar from "./components/Sidebar";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
