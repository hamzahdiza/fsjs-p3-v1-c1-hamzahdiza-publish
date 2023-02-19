// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// app.jsx
import { useState } from "react";
import "./App.css";
// import Dashboard from "./pages/Dashboard";
// import Sidebar from "./components/Sidebar";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

// routes/index.jsx
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

// store/index.jsx
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import productsReducer from "./reducers/productsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  product: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// productsReducer.jsx
import { PRODUCTS_FETCH_PENDING, PRODUCTS_FETCH_REJECT, PRODUCTS_FETCH_SUCCESS } from "../actions/actionType";

const initialState = {
  isLoading: true,
  products: [],
  errorMsg: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_PENDING:
      return {
        ...initialState,
      };
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case PRODUCTS_FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;

// actionCreator.jsx
import { DETAIL_PRODUCTS_FETCH_PENDING, DETAIL_PRODUCTS_FETCH_REJECT, DETAIL_PRODUCTS_FETCH_SUCCESS, PRODUCTS_FETCH_PENDING, PRODUCTS_FETCH_REJECT, PRODUCTS_FETCH_SUCCESS } from "./actionType";

export const loginAdmin = (dataLogin) => {
  return async (dispatch, getState) => {
    // console.log("Masuk Login Creator");
    try {
      console.log(dataLogin, "<<<<<<<<<<<<<");
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataLogin),
      });
      const responseJson = await response.json();
      localStorage.setItem("access_token", responseJson.access_token);
      console.log(responseJson);
    } catch (err) {
      console.log(err);
    }
  };
};

export const productsFetchPending = () => ({
  type: PRODUCTS_FETCH_PENDING,
});

export const productsFetchSuccess = (responseJson) => {
  // console.log(responseJson, "<<<<<<<<");
  return {
    type: PRODUCTS_FETCH_SUCCESS,
    payload: responseJson,
  };
};

export const productsFetchReject = (errorMessage) => {
  return {
    type: PRODUCTS_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch(productsFetchPending());
    console.log("Masuk fetch products");
    try {
      const response = await fetch("http://localhost:3000/products");
      const responseJson = await response.json();
      console.log(responseJson);
      dispatch(productsFetchSuccess(responseJson));
    } catch (err) {
      dispatch(productsFetchReject(err));
    }
  };
};

// actionType.jsx
export const PRODUCTS_FETCH_SUCCESS = "products/fetchPending";
export const PRODUCTS_FETCH_PENDING = "products/fetchSuccess";
export const PRODUCTS_FETCH_REJECT = "products/fetchReject";

// Detail
export const DETAIL_PRODUCTS_FETCH_SUCCESS = "detailProduct/fetchPending";
export const DETAIL_PRODUCTS_FETCH_PENDING = "detailProduct/fetchSuccess";
export const DETAIL_PRODUCTS_FETCH_REJECT = "detailProduct/fetchReject";

// Pages
// Login.jsx
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../store/actions/actionCreator";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // const { isLoading, products, errorMsg: error } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   loginAdminHandler();
  // }, []);

  const loginAdminHandler = async (dataLogin) => {
    try {
      await dispatch(loginAdmin(dataLogin));
    } catch (err) {
      console.log(err);
    }
  };

  const formLoginOnChangeHandler = (event) => {
    const newObj = {
      ...formLogin,
    };

    newObj[event.target.name] = event.target.value;

    setFormLogin(newObj);

    // console.log(formLogin.email);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const dataLogin = {
      ...formLogin,
    };
    // console.log(dataLogin, "////////////////////");
    loginAdminHandler(dataLogin);
    navigate("/");
  };

  <form onSubmit={submitHandler} class="mt-8 grid grid-cols-12 gap-12">
  <input value={formLogin.email} onChange={formLoginOnChangeHandler} type="email" id="email" name="email"></input>

  {/* Fetch Data */}
import { useState, useEffect } from "react";
import "../App.css";
// import useFetch from "../hooks/useFetch";
import CardProduct from "../components/CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/actionCreator";

function Products() {
  const { isLoading, products, errorMsg: error } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      await dispatch(fetchProducts());
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <section>
        <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
      </section>
    );
  }

  {products.map((product) => {
    return <CardProduct product={product} key={product.id} />;
  })}
  
