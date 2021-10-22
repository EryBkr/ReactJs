//ActionTypes dosyasında  ki herşeyi al
import * as actionTypes from "./actionsTypes";


//Gönderilen cartItem ı payloadına ekleyecen action
//cartItem==product aslında
export function addToCart(cartItem){
    return {
        type:actionTypes.ADD_TO_CART,
        payload:cartItem
    }
}

//Gönderilen ürün id sine göre sepetten çıkartacak
export function removeToCart(productId){
    return {
        type:actionTypes.REMOVE_FROM_CART,
        payload:productId
    }
}

