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
} from "../actions/actionType";

const initialState = {
  isLoading: true,
  products: [],
  errorMsg: "",

  allImage: {},

  categories: [],
  productDetail: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...initialState,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case REGISTER_PENDING:
      return {
        ...initialState,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

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

    case IMAGES_FETCH_PENDING:
      return {
        ...initialState,
      };
    case IMAGES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allImage: action.payload,
      };
    case IMAGES_FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case DETAIL_PRODUCTS_FETCH_PENDING:
      return {
        ...initialState,
      };
    case DETAIL_PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productDetail: action.payload,
      };
    case DETAIL_PRODUCTS_FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case PRODUCTS_POST_PENDING:
      return {
        ...initialState,
      };
    case PRODUCTS_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case PRODUCTS_POST_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case PRODUCTS_EDIT_PENDING:
      return {
        ...initialState,
      };
    case PRODUCTS_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case PRODUCTS_EDIT_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case PRODUCTS_DELETE_PENDING:
      return {
        ...initialState,
      };
    case PRODUCTS_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case PRODUCTS_DELETE_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case CATEGORIES_FETCH_PENDING:
      return {
        ...initialState,
      };
    case CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case CATEGORIES_FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case CATEGORIES_POST_PENDING:
      return {
        ...initialState,
      };
    case CATEGORIES_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CATEGORIES_POST_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case CATEGORIES_DELETE_PENDING:
      return {
        ...initialState,
      };
    case CATEGORIES_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CATEGORIES_DELETE_REJECT:
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
