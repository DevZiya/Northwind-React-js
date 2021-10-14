import * as actionsType from "../actions/actionsType"
import initialState from "./initialState"

export default function productListReducer(state=initialState.products,action){
    switch (action.type) {
        case actionsType.GET_PRODUCTS_SUCCESS:
            return action.payload
    
        default:
            return state
    }
}