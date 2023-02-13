import { useState } from "react";
import Products from "./pages/products";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
