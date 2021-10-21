//uygulamamızda bir den fazla reducer olacaktır.sonuçta çok farklı amaçlarla kullanılan state ler var
//bu reducer ları tek bir yerde toplayarak store a vereceğiz
import { combineReducers } from "redux";
import changeCategoryReducer from "../reducers/changeCategoryReducer";

//uygulamam daki tüm reducer ları burada toplayacağım
const rootReducer=combineReducers({
    changeCategoryReducer
});

export default rootReducer;