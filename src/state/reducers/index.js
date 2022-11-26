import isCartOpenReducer from "./isCartOpen";
import productsReducer from "./products";
import cartReducer from "./cart";
import loadingStatesReducer from "./loadingStates";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isCartOpen: isCartOpenReducer,
    products: productsReducer,
    cart: cartReducer,
    loadingState: loadingStatesReducer,
});

export default rootReducer;