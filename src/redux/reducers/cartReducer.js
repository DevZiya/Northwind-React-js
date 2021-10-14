import * as actionsType from '../actions/actionsType'
import initialState from './initialState'

export default function cartReducer(state=initialState.cart,action){
        switch (action.type) {
            case actionsType.ADD_TO_CART :
                let addedItem = state.find(card=>card.product.id === action.payload.product.id)
               if(addedItem){
                   let newState = state.map(cartItem=>{
                    if(cartItem.product.id === action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem
                   })
                   return newState
               }else{
                  return [...state,{...action.payload}]
               }

               case actionsType.REMOVE_FROM_CART:
                   let newState2 = state.filter(cartItem=>cartItem.product.id !== action.payload.id)
                    return newState2
            default:
                return state
        }
}