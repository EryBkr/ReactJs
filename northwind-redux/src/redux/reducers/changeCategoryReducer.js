//ActionTypes dosyasında  ki herşeyi al
import * as actionTypes from "../actions/actionsTypes";
//state parametresi için default değerleri barındıran dosya
import initialState from "./initialState";

//reducer lar state değişiminin ve geri dönüşünün gerçekleştiği yerlerdir
//ilk parametre state değerini ikinci parametre ise action objesini alır
//gelen action a göre eylemler gerçekleştirilir
export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        
        default:
            return state; //uygun bir action gelmedi bizde default bir state döndük
    }
}

