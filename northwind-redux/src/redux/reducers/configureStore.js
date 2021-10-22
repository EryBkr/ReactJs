import { applyMiddleware, createStore } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

//Tüm reducer larımı rootReducer da paketleyip buradan store'a kayıt edilmesini sağlıyorum
export default function configureStore(){
    //api çağrımlarında redux thunk 'ı implemente etmemiz gerekmektedir
    return createStore(rootReducer,applyMiddleware(thunk));
}