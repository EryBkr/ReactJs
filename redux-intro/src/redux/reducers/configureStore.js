import { createStore } from "redux";
import reducers from "./index";

//Bu dosyayı state veritabanı gibi düşünebiliriz

//Reducers topluluğunu geri dönüyoruz
export default function configureStore(){
    return createStore(reducers);
}