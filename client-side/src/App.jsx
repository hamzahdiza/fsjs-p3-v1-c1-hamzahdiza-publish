// import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import router from "./routes";
// import Products from "./pages/Products";
// import Navbar from "./components/Navbar";
// import DetailProduct from "./pages/DetailProduct";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
