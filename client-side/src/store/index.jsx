import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import productsReducer from "./reducers/productsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  product: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
