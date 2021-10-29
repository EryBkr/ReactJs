//uygulamamızda bir den fazla reducer olacaktır.sonuçta çok farklı amaçlarla kullanılan state ler var
//bu reducer ları tek bir yerde toplayarak store a vereceğiz
import { combineReducers } from "redux";
import changeCategoryReducer from "../reducers/changeCategoryReducer";
import categoryListReducer from "../reducers/categoryListReducer";
import productListReducer from "../reducers/productListReducer";
import cartReducer from "../reducers/cartReducer";
import saveProductReducer from "../reducers/saveProductReducer";


//uygulamam daki tüm reducer ları burada toplayacağım
const rootReducer=combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    saveProductReducer
});

export default rootReducer;