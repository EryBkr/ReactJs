//Reducer ları bir araya toplayan dosya
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

//reducer larımı bir araya obje olarak getireceğim
const reducers=combineReducers({
    counterReducer:counterReducer
});

//public hale getirdik
export default reducers;