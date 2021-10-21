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