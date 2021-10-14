import * as actionsType from "../actions/actionsType"
import initialState from "./initialState"

export default function changeCategoryReducers(state=initialState.categories,action){
    switch (action.type) {
        case actionsType.GET_CATEGORY_SUCCESS:
            return action.payload
    
        default:
            return state
    }
}