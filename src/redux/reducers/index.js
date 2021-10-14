import { combineReducers } from "redux";
import changeCategoryReducers from './changeCategoryReducers'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from "./cartReducer";

const rootReducers = combineReducers({
    changeCategoryReducers,
    categoryListReducer,
    productListReducer,
    cartReducer
})

export default rootReducers