//ActionTypes dosyasında  ki herşeyi al
import * as actionTypes from "./actionsTypes";

//Reducer actionType göre State'i payload içerisinde bulunan data ile değiştirecek
//Bu arkadaş bizlere aslında action objesi dönmektedir amacıda budur
export function changeCategory(category) {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }
}


//Reducer'ın anlayacağı dilden oluşturduk.Payload kısmını yani state'e atanacak kısmı 
//fetch ile hallediyoruz
export function getCategoriesSuccess(categories) {
    return {
        type:actionTypes.GET_CATEGORIES_SUCCESS,
        payload:categories
    }
}

//Api den çağrım işlemi yapacak ve bizlerin payload handle etmesini sağlayacak
export function getCategories() {
    return function (dispatch){
        let url = "http://localhost:3000/categories";
        return fetch(url)
            .then(response => response.json())
            .then(jsonResponse => dispatch(getCategoriesSuccess(jsonResponse)));
           
    }
}