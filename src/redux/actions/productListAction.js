import * as actionsType from './actionsType'

export function getProductsSuccess(products){
    return{type:actionsType.GET_PRODUCTS_SUCCESS,payload:products}
}

export function getProducts(categoryId){
    return function(dispatch){
        let url = "http://localhost:3000/products";
        if(categoryId){
            url = url + "?categoryId=" + categoryId
        }
        fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getProductsSuccess(result)))
    }
}