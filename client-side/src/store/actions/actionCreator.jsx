import { DETAIL_PRODUCTS_FETCH_PENDING, DETAIL_PRODUCTS_FETCH_REJECT, DETAIL_PRODUCTS_FETCH_SUCCESS, PRODUCTS_FETCH_PENDING, PRODUCTS_FETCH_REJECT, PRODUCTS_FETCH_SUCCESS } from "./actionType";

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
      const response = await fetch("http://localhost:3000/pub/products");
      const responseJson = await response.json();
      console.log(responseJson);
      dispatch(productsFetchSuccess(responseJson));
    } catch (err) {
      dispatch(productsFetchReject(err));
    }
  };
};

// Detail Product
export const detailProductFetchPending = () => ({
  type: DETAIL_PRODUCTS_FETCH_PENDING,
});

export const detailProductFetchSuccess = (responseJson) => ({
  type: DETAIL_PRODUCTS_FETCH_SUCCESS,
  payload: responseJson,
});

export const detailProductFetchReject = (errorMessage) => {
  return {
    type: DETAIL_PRODUCTS_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchProductBySlug = (params) => {
  return async (dispatch, getState) => {
    dispatch(detailProductFetchPending());
    console.log("Masuk fetch product By Slug");
    console.log(params, "Slug Product <<<<<<<");
    try {
      const response = await fetch(`http://localhost:3000/pub/products/${params}`);
      const responseJson = await response.json();
      // console.log(responseJson);
      dispatch(detailProductFetchSuccess(responseJson));
    } catch (err) {
      dispatch(detailProductFetchReject(err));
    }
  };
};
