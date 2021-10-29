import React,{useEffect,useState} from 'react'
import {connect, useDispatch, useSelector} from "react-redux"
import { useHistory, useLocation, useParams } from 'react-router';
import ProductDetail from './ProductDetail';
import {getCategories} from "../../redux/actions/categoryActions";
import {saveProduct} from "../../redux/actions/productActions";

function AddOrUpdateProduct() {
    const [product,setProduct]=useState({});
    const dispatch = useDispatch();

    //Validasyon State
    const [errors,setErrors]=useState({});

    //Store da bulunan productList datası
    const productReducer=useSelector(state=>state.productListReducer);

     //Store da bulunan categoryList datas
    const categoryReducer=useSelector(state=>state.categoryListReducer);

    const history=useHistory();

    //Gelen product id değerini handle ediyoruz (şayet var ise)
    const {productId}=useParams();

    function getProductById(products,productId){
        
        const pId=parseInt(productId);
        let productGet=products.find(product=>product.id===pId)||null;
        return productGet;
    }

    const currentProduct=productId && productReducer.length>0
    ?getProductById(productReducer,productId)
    :{};

    //setProduct(currentProduct);
    useEffect(()=>{

          //kategoriler boş gelmiş ise
          if(categoryReducer.length===0){
            //Üst komponentten gelen redux a kategorileri yükleyecek fonksiyonu çalıştırıyoruö
            dispatch(getCategories());
        }

        const currentProduct=productId && productReducer.length>0
        ?getProductById(productReducer,productId)
        :{};
        setProduct(currentProduct); 
    },[]);


    function handleChange(event){
        //inputlar için ideal kullanım (hangi name inputun değerini aldık)
        const {name,value}=event.target;
        //inputa değer yazdığımız zaman eski product değerini extend et ve yeni name:value çiftini ekle
        //gelen property (input--> name) categoryId ise integer olarak atıyoruz
        setProduct(previouseProduct=>({...previouseProduct,
            [name]:name==="categoryId"?parseInt(value,10):value}))

      
      
            
    }

    function validate(name,value){
          //Ürün issmi boş ise
          if(name==="productName" && (product.productName==="" || product.productName)){
            //Validasyon kontrol
           setErrors(prevErrors=>({...prevErrors,productName:"Ürün İsmi olmalıdır"}))
       }
       else{
        setErrors(prevErrors=>({...prevErrors,productName:""}))
       }
    }

    function handleSave(event){
        //sayfa refresh olmasın diye ekledik
        event.preventDefault();

        //state içerisinde bulunan product ı üst komponentte bulunan saveProduct metoduna gönderiyoruz
        dispatch(saveProduct(product));
        history.push("/");
    }



    return (
      <ProductDetail  
      product={product} 
      categories={categoryReducer} 
      onChange={handleChange} 
      onSave={handleSave}
      errors={errors}/>
    )
}

export default AddOrUpdateProduct;

