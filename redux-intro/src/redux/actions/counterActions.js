//fonksiyonlarımı barındığım dosya

//static isimlere erişebilmek için ekledim
import * as actionTypes from "./actionTypes";

//Geriye fonksiyon dönen bir fonksiyon tanımladık
//parametre olarak obje tanımlaması yaptık
export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
});

//Geriye fonksiyon dönen bir fonksiyon tanımladık
//parametre olarak obje tanımlaması yaptık
export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
});


//Geriye fonksiyon dönen bir fonksiyon tanımladık
//parametre olarak obje tanımlaması yaptık
export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
});