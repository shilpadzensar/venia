import { combineReducers } from "redux";
import { productsReducer, cartProductsReducer ,} from "./productsReducer";
const reducers = combineReducers({
  product: productsReducer,
  cart: cartProductsReducer
});
export default reducers;
