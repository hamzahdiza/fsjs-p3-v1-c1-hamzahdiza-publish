import {
  CATEGORIES_DELETE_PENDING,
  CATEGORIES_DELETE_REJECT,
  CATEGORIES_DELETE_SUCCESS,
  CATEGORIES_FETCH_PENDING,
  CATEGORIES_FETCH_REJECT,
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_POST_PENDING,
  CATEGORIES_POST_REJECT,
  CATEGORIES_POST_SUCCESS,
  DETAIL_PRODUCTS_FETCH_PENDING,
  DETAIL_PRODUCTS_FETCH_REJECT,
  DETAIL_PRODUCTS_FETCH_SUCCESS,
  IMAGES_FETCH_PENDING,
  IMAGES_FETCH_REJECT,
  IMAGES_FETCH_SUCCESS,
  LOGIN_PENDING,
  LOGIN_REJECT,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  PRODUCTS_DELETE_PENDING,
  PRODUCTS_DELETE_REJECT,
  PRODUCTS_DELETE_SUCCESS,
  PRODUCTS_EDIT_PENDING,
  PRODUCTS_EDIT_REJECT,
  PRODUCTS_EDIT_SUCCESS,
  PRODUCTS_FETCH_PENDING,
  PRODUCTS_FETCH_REJECT,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_POST_PENDING,
  PRODUCTS_POST_REJECT,
  PRODUCTS_POST_SUCCESS,
  REGISTER_PENDING,
  REGISTER_REJECT,
  REGISTER_SUCCESS,
} from "./actionType";

const domain = "https://dizarsant.dizaerigop3c1.shop";
const localhost = "http://localhost:3000";

export const loginPending = () => ({
  type: LOGIN_PENDING,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginReject = (errorMessage) => {
  return {
    type: LOGIN_REJECT,
    payload: errorMessage,
  };
};

export const loginAdmin = (dataLogin) => {
  return async (dispatch, getState) => {
    console.log("Masuk Login Creator");
    dispatch(loginPending());
    try {
      console.log(dataLogin, "<<<<<<<<<<<<<");
      const response = await fetch(`${localhost}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataLogin),
      });
      const responseJson = await response.json();
      localStorage.setItem("access_token", responseJson.access_token);
      dispatch(loginSuccess());
      console.log(responseJson);
    } catch (err) {
      console.log(err);
      dispatch(loginReject());
    }
  };
};

// Register Admin

export const registerPending = () => ({
  type: REGISTER_PENDING,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerReject = (errorMessage) => {
  return {
    type: REGISTER_REJECT,
    payload: errorMessage,
  };
};

export const registerAdmin = (dataRegister) => {
  return async (dispatch, getState) => {
    console.log("Masuk Register Creator", dataRegister);
    dispatch(registerPending());
    try {
      console.log(dataRegister, "<<<<<<<<<<<<<");
      const response = await fetch(`${localhost}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataRegister),
      });
      const responseJson = await response.json();
      // console.log(responseJson);
      dispatch(registerSuccess());
    } catch (err) {
      console.log(err);
      dispatch(registerReject(err));
    }
  };
};

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logout = () => {
  localStorage.removeItem("access_token");
  dispatch(logoutSuccess());
};

// Product Fetch
export const productsFetchPending = () => ({
  type: PRODUCTS_FETCH_PENDING,
});

export const productsFetchSuccess = (responseJson) => {
  // console.log(responseJson, "5454545454");
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
      const response = await fetch(`${localhost}/products`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJson = await response.json();
      // console.log(responseJson, "][]][][][][]][");
      dispatch(productsFetchSuccess(responseJson));
    } catch (err) {
      dispatch(productsFetchReject(err));
    }
  };
};

// Fetch Images
export const imagesFetchPending = () => ({
  type: IMAGES_FETCH_PENDING,
});

export const imagesFetchSuccess = (responseJson) => {
  return {
    type: IMAGES_FETCH_SUCCESS,
    payload: responseJson,
  };
};

export const imagesFetchReject = (errorMessage) => {
  return {
    type: IMAGES_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchImages = ({ slugProduct }) => {
  return async (dispatch, getState) => {
    dispatch(imagesFetchPending());
    console.log("Masuk fetch Images");
    console.log(slugProduct);
    try {
      const response = await fetch(`${localhost}/products/images/${slugProduct}`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJson = await response.json();
      // console.log(responseJson, "][]][][][][]][");
      dispatch(imagesFetchSuccess(responseJson));
    } catch (err) {
      dispatch(imagesFetchReject(err));
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

export const fetchProductBySlug = ({ slugProduct }) => {
  return async (dispatch, getState) => {
    dispatch(detailProductFetchPending());
    console.log("Masuk fetch product By Id");
    try {
      // console.log(slugProduct, "Slug Product <<<<<<<");
      const response = await fetch(`${localhost}/products/${slugProduct}`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJson = await response.json();
      // console.log(responseJson);
      dispatch(detailProductFetchSuccess(responseJson));
    } catch (err) {
      dispatch(detailProductFetchReject(err));
    }
  };
};

export const productPostPending = () => ({
  type: PRODUCTS_POST_PENDING,
});

export const productPostSuccess = () => ({
  type: PRODUCTS_POST_SUCCESS,
});

export const productPostReject = (errorMessage) => {
  return {
    type: PRODUCTS_POST_REJECT,
    payload: errorMessage,
  };
};

export const postAdd = (dataToPost, params) => {
  // console.log(params.slugProduct);
  const images1 = dataToPost.images1;
  const images2 = dataToPost.images2;
  const images3 = dataToPost.images3;
  const images4 = dataToPost.images4;

  if (images1) {
    dataToPost.images.push(images1);
  }
  if (images2) {
    dataToPost.images.push(images2);
  }
  if (images3) {
    dataToPost.images.push(images3);
  }
  if (images3) {
    dataToPost.images.push(images4);
  }
  return async (dispatch, getState) => {
    console.log("Masuk Add Creator");
    console.log(dataToPost, "LLLLLLLLLLLLLLLLLLLLLLL");
    dispatch(productPostPending());
    try {
      console.log(dataToPost, "<<<<<<<<<<<<<");
      const response = await fetch(`${localhost}/products`, {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToPost),
      });
      const responseJson = await response.json();
      console.log(responseJson);
      dispatch(productPostSuccess());
    } catch (err) {
      console.log(err);
      dispatch(productPostReject(err));
    }
  };
};

export const productEditPending = () => ({
  type: PRODUCTS_EDIT_PENDING,
});

export const productEditSuccess = () => ({
  type: PRODUCTS_EDIT_SUCCESS,
});

export const productEditReject = (errorMessage) => {
  return {
    type: PRODUCTS_EDIT_REJECT,
    payload: errorMessage,
  };
};

export const postEdit = (dataToPost, params) => {
  return async (dispatch, getState) => {
    console.log("Masuk AddEdit Creator");
    console.log(dataToPost, "LLLLLLLLLLLLLLLLLLLLLLL");
    dispatch(productPostSuccess());
    try {
      console.log(dataToPost, "<<<<<<<<<<<<<");
      const response = await fetch(`${localhost}/products/${params.slugProduct}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToPost),
      });
      const responseJson = await response.json();
      console.log(responseJson);
      dispatch(productEditSuccess());
    } catch (err) {
      console.log(err);
      dispatch(productEditReject(err));
    }
  };
};

// Delete Product
export const productDeletePending = () => ({
  type: PRODUCTS_DELETE_PENDING,
});

export const productDeleteSuccess = () => ({
  type: PRODUCTS_DELETE_SUCCESS,
});

export const productDeleteReject = (errorMessage) => {
  return {
    type: PRODUCTS_DELETE_REJECT,
    payload: errorMessage,
  };
};

export const deleteProduct = (idProduct) => {
  return async (dispatch, getState) => {
    dispatch(productDeletePending());
    console.log("Masuk Delete product By Id");
    console.log(idProduct);
    try {
      const response = await fetch(`${localhost}/products/${idProduct}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJson = await response.json();
      // console.log(responseJson);
      dispatch(productDeleteSuccess());
    } catch (err) {
      dispatch(productDeleteReject(err));
    }
  };
};

// Fetch Category
export const categoriesFetchPending = () => ({
  type: CATEGORIES_FETCH_PENDING,
});

export const categoriesFetchSuccess = (responseJson) => {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload: responseJson,
  };
};

export const categoriesFetchReject = (errorMessage) => {
  return {
    type: CATEGORIES_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    dispatch(categoriesFetchPending());
    // console.log("Masuk fetch Categpries");
    try {
      const response = await fetch(`${localhost}/categories`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJson = await response.json();
      // console.log(responseJson, "][]][][][][]][");
      dispatch(categoriesFetchSuccess(responseJson));
    } catch (err) {
      dispatch(categoriesFetchReject(err));
    }
  };
};

// Post Category
export const categoryAddPending = () => ({
  type: CATEGORIES_POST_PENDING,
});

export const categoryAddSuccess = () => ({
  type: CATEGORIES_POST_SUCCESS,
});

export const categoryAddReject = (errorMessage) => {
  return {
    type: CATEGORIES_POST_REJECT,
    payload: errorMessage,
  };
};

export const addCategory = (dataCategory) => {
  return async (dispatch, getState) => {
    console.log("Masuk Add Category Creator");
    dispatch(categoryAddPending());
    try {
      console.log(dataCategory, "<<<<<<<<<<<<<");
      const response = await fetch(`${localhost}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataCategory),
      });
      const responseJson = await response.json();
      dispatch(categoryAddSuccess(responseJson));
    } catch (err) {
      dispatch(categoryAddReject(err));
      console.log(err);
    }
  };
};

// Delete Category
export const categoryDeletePending = () => ({
  type: CATEGORIES_DELETE_PENDING,
});

export const categoryDeleteSuccess = () => ({
  type: CATEGORIES_DELETE_SUCCESS,
});

export const categoryDeleteReject = (errorMessage) => {
  return {
    type: CATEGORIES_DELETE_REJECT,
    payload: errorMessage,
  };
};

export const deleteCategory = (idCategory) => {
  return async (dispatch, getState) => {
    dispatch(categoryDeletePending());
    console.log("Masuk Delete product By Id", idCategory);
    console.log(idCategory);
    try {
      const response = await fetch(`${localhost}/categories/${idCategory}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJson = await response.json();
      // console.log(responseJson);
      dispatch(categoryDeleteSuccess());
    } catch (err) {
      dispatch(categoryDeleteReject(err));
    }
  };
};
