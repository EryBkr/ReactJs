//Reducer tarafında ki default state parametrelerinin değerlerini tek bir yerde topladığımız dosya
export default {
    currentCategory:{categoryName:"Soğuk İçecekler"}, //default bir obje oluşturduk
    categories:[], //kategorileri dönecek reducer için default bir dizi oluşturduk
    products:[], //ürünleri dönecek reducer için default bir dizi oluşturduk
    cart:[],//alışveriş sepetinin default halini oluşturdum
    savedProduct:{}//boş product nesnesi
}