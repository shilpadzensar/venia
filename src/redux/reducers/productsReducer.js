import { ActionTypes } from "../constants/action-types";
import {cloneDeep} from "lodash";

const intialState = {
  products: [],
  product: []
};

const intialCartState = {
  cart: [],
};


const addProductToCart = (state, action) => {
  let products = cloneDeep(state.cart);
  const itemInCart = products?.find(item => item.id === action.payload.id);
  if (!itemInCart) {
    products = [...products, action.payload];
  } else {
    // TODOL: UPDATE ITEM COUNT
  }
  return { ...state, cart:products };
}


export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export const cartProductsReducer = (state = intialCartState, action) => {

  switch (action.type) {
    case ActionTypes.ADD_SELECTED_PRODUCT:
      return addProductToCart(state, action);
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
