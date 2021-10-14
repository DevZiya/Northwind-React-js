import * as actionType from './actionsType'

export function addToCart(cartItem){
     return {type:actionType.ADD_TO_CART, payload:cartItem}
}

export function removeFromCard(product){
    return {type:actionType.REMOVE_FROM_CART, payload:product}
}