import * as actionTypes from "./actionsTypes"

//Reducer'ın anlayacağı dilden oluşturduk.Payload kısmını yani state'e atanacak kısmı 
//fetch ile hallediyoruz
export function getProductsSuccess(products) {
    return {
        type:actionTypes.GET_PRODUCTS_SUCCESS,
        payload:products
    }
}

//Api den çağrım işlemi yapacak ve bizlerin payload handle etmesini sağlayacak
//Aynı zamanda action oluşturuyoruz
//categoryId e göre filtreleme yapmak isteyebiliriz diye parametre olarak ekledim
export function getProducts(categoryId) {
    return function (dispatch){
        let url = "http://localhost:3000/products";

        //Bizlere categoryId gelmiş mi?
        if(categoryId){
            //Url e filtre ekliyoruz
            url+="?categoryId="+categoryId;
        }

        return fetch(url)
            .then(response => response.json())
            .then(jsonResponse => dispatch(getProductsSuccess(jsonResponse)));
           
    }
}