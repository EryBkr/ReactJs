//static isimlere erişebilmek için ekledim
import * as actionTypes from "../actions/actionTypes";


const counterReducer = (state = 0, action) => {

    let newState;

    //Action type lar arası kıyaslama yapabilmemizi sağlar
    switch (action.type) 
    {
        case actionTypes.INCREASE_COUNTER:
            //counterActions.js de objemiz içerisinde ki payload değerini kullanıyoruz 
            return (newState = state + action.payload);

        case actionTypes.DECREASE_COUNTER:
            //counterActions.js de objemiz içerisinde ki payload değerini kullanıyoruz 
            return (newState = state + action.payload);

        case actionTypes.INCREASE_BY_TWO_COUNTER:
            //counterActions.js de objemiz içerisinde ki payload değerini kullanıyoruz 
            return (newState = state + action.payload);

        default:
            return state;
    }
};

//Public hale getirdik
export default counterReducer;