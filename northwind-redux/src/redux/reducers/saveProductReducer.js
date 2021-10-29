//ActionTypes dosyasında  ki herşeyi al
import * as actionTypes from "../actions/actionsTypes";
//state parametresi için default değerleri barındıran dosya
import initialState from "./initialState";

//reducer lar state  geri dönüşünün gerçekleştiği yerlerdir
//ilk parametre state değerini ikinci parametre ise action objesini alır
//gelen action a göre eylemler gerçekleştirilir
export default function saveProductReducer(state=initialState.savedProduct,action){
  //Ekleme ve Güncelleme
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESSS:
            return action.payload;
        case actionTypes.CREATE_PRODUCT_SUCCESSS:
             return action.payload;
        default:
            return state; //uygun bir action gelmedi bizde default bir state döndük
    }
}