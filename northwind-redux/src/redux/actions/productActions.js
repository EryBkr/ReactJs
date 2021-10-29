import * as actionTypes from "./actionsTypes"

//Reducer'ın anlayacağı dilden oluşturduk.Payload kısmını yani state'e atanacak kısmı 
//fetch ile hallediyoruz
export function getProductsSuccess(products) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function createProductSucces(product) {
    return {
        type: actionTypes.CREATE_PRODUCT_SUCCESSS,
        payload: product
    }
}

export function updateProductSucces(product) {
    return {
        type: actionTypes.UPDATE_PRODUCT_SUCCESSS,
        payload: product
    }
}

//Api den çağrım işlemi yapacak ve bizlerin payload handle etmesini sağlayacak
//Aynı zamanda action oluşturuyoruz
//categoryId e göre filtreleme yapmak isteyebiliriz diye parametre olarak ekledim
export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products";

        //Bizlere categoryId gelmiş mi?
        if (categoryId) {
            //Url e filtre ekliyoruz
            url += "?categoryId=" + categoryId;
        }

        return fetch(url)
            .then(response => response.json()) //String tipte json data geldiği için json objesine çeviriyorum
            .then(jsonResponse => dispatch(getProductsSuccess(jsonResponse)));

    }
}

//Create & Update işlemi için api kullanımı
export function saveProductApi(product) {
    //ID nin olup olmama durumuna göre Güncelleme veya Ekleme işlemi yapıyoruz
    return fetch("http://localhost:3000/products/" + (product.id || ""), {
        method: product.id ? "PUT" : "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(product) //JSON String gönderilir kullanırken ise json a çeviririz
    }).then(handleResponse).catch(handleError); //Başarı ya da hata durumlarını ele aldık
}

export function saveProduct(product) {
    return function (dispatch) {
        //API işlemi yapılıyor
        return saveProductApi(product).then(savedProduct => {
            //Kayıt başarılı ise Ekleme ve Update işlemine göre farklı aksiyon alacağız
            product.id ?
                dispatch(updateProductSucces(savedProduct)) //Güncelleme
                :
                dispatch(createProductSucces(savedProduct)) //Ekleme
        }).catch(error => {
            throw error
        }); //Hata var ise fırlatıyoruz
    }
}

//İşlem başarılı ise gelen datayı json a çevirip işlemlerime devam ediyorum
export async function handleResponse(response) {
    if(response.ok){
        return response.json()
    }
    //ok değilse hata fırlatıyoruz
    const error=await response.text();
    throw new Error(error);
}

export function handleError(error){
    console.error("Bir hata oluştu");
    throw error;
}