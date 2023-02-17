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
