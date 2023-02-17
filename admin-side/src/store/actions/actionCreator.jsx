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

// Detail Product
// export const detailProductFetchPending = () => ({
//   type: DETAIL_PRODUCTS_FETCH_PENDING,
// });

// export const detailProductFetchSuccess = (responseJson) => ({
//   type: DETAIL_PRODUCTS_FETCH_SUCCESS,
//   payload: responseJson,
// });

// export const detailProductFetchReject = (errorMessage) => {
//   return {
//     type: DETAIL_PRODUCTS_FETCH_REJECT,
//     payload: errorMessage,
//   };
// };
