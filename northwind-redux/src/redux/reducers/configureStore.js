import { createStore } from "redux";
import rootReducer from "./index";

//Tüm reducer larımı rootReducer da paketleyip buradan store'a kayıt edilmesini sağlıyorum
export default function configureStore(){
    return createStore(rootReducer);
}