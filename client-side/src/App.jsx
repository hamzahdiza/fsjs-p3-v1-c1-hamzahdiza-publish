import { useState } from "react";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import DetailProduct from "./pages/DetailProduct";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      {/* <DetailProduct /> */}
    </div>
  );
}

export default App;
