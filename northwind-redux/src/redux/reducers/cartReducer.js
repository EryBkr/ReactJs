//ActionTypes dosyasında  ki herşeyi al
import * as actionTypes from "../actions/actionsTypes";
//state parametresi için default değerleri barındıran dosya
import initialState from "./initialState";


//State güncelleme ve state ulaşmak için kullanacağız
export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //Ürün sepette mevcut mu
            var addedItem = state.find(cartItem => cartItem.product.id === action.payload.product.id);
            if (addedItem) {
                //redux tarafında state değişiklikleri gerekir.Yani referansın değişmesi gerekir
                //Bundan dolayı sepetteki ürünün sayısı değişecek ise ve bu değişikliği yansıtacaksak böyle bir işlem yapmamız gerekmektedir
                var newState = state.map(cartItem => {
                    //cart dizisi içerisinden elemanı bul ve adedini 1 arttır
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, {
                            quantity: addedItem.quantity + 1
                        })
                    }
                    return cartItem;
                });
                //Quantity si ve referansı değişmiş alışveriş sepeti
                return newState;
            }else{
                //...state ile state'i kopyalatıp action içerisinde payload ı ekliyoruz
                return [...state,{...action.payload}];
            }

        case actionTypes.REMOVE_FROM_CART:
            //gelen ürün id sini ayırıp geri kalan ürünlerle bir dizi oluşturuyorum
            //bu işlem sonucunda da referans değiştiği için ...state yazmama gerek yok
            const newCartList=state.filter(cartItem=>cartItem.product.id!==action.payload);
            return newCartList;

        default:
            return state;
    }
}