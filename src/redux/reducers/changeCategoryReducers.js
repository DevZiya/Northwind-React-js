import * as actionsType from "../actions/actionsType"
import initialState from "./initialState"

export default function changeCategoryReducers(state=initialState.currentCategory,action){
    switch (action.type) {
        case actionsType.CHANGE_CATEGORY:
            return action.payload
    
        default:
            return state
    }
}