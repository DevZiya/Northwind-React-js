import * as actionsType from './actionsType'

export function changeCategory(category){
    return{type:actionsType.CHANGE_CATEGORY,payload:category}
}

export function getCategoriesSuccess(categories){
    return{type:actionsType.GET_CATEGORY_SUCCESS,payload:categories}
}

export function getCategories(){
    return function(dispatch){
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)))
    }
}