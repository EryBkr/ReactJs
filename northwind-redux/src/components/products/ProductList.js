import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge,Button } from 'reactstrap';
import {bindActionCreators} from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table } from 'reactstrap';
import alertify from "alertifyjs";


class ProductList extends Component {

    //component çağrıldığında aktif olacak
    componentDidMount(){
        //Bu fonksiyon action oluşturacak ve oluşan action bizler için gerekli state'i payload datasıyla dolduracak 
        this.props.actions.getProducts();
    }

    //Sepete Ekle butonuna tıklandı
    addToCart=product=>{
        //Actionlarımda bulunan addToCart ı aşağıda props lara eklemiştim.Şimdi bu fonksiyona product gönderiyorum
        //tabii default olarak quantity sini 1 olarak set ettim
        this.props.actions.addToCart({quantity:1,product:product})

        //ürünün sepete eklendiği mesajını başarıyla gösteriyorum
        alertify.success(`${product.productName} adlı ürün başarıyla sepete eklenmiştir`);
    }

    render() {
        return (
            <div>
                <p>Product <Badge className="bg-success">{this.props.currentCategory.categoryName}</Badge></p>
                <Table>
                     <thead>
                       <tr>
                         <th>#</th>
                         <th>Product Name</th>
                         <th>Unit Price</th>
                         <th>Quantity Per Unit</th>
                         <th>Units In Stock</th>
                         <th></th>
                       </tr>
                     </thead>
                     <tbody>
                         {
                             this.props.products.map(product=>( 
                             <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                <td>
                                    <Button className="bg-warning" onClick={()=>this.addToCart(product)}>
                                        Add
                                    </Button>
                                </td>
                              </tr>
                              ))
                         }
                     </tbody>
                </Table>
            </div>
        )
    }
}

//Product listesinde , seçili kategoriye göre listeleme yapmak istiyorum
//Kategori seçme işlemi CategoryList componentinde gerçekleştirilmiştir
//Seçilen kategorinin state ine store üzerinden erişip props larına gönderiyorum
//Product List reducer ından gerekli state bilgisini alıyorum
//reducer lardan state talep ederiz fazlası yapılmaz
function mapStateToProps(state){
    return{
        currentCategory:state.changeCategoryReducer,
        products:state.productListReducer
    }
}

//aksiyonları prop lara bağla gibi basit bir tabir uygundur
//yukarıda ki örnekte direkt bir reducer bağladık burada ise action bağladık
//eğer bir aksiyon alınacaksa dispatch tarafında bunu ele alıyoruz
//action bağlama olayı bizim o actionları kendi fonksiyonlarımızmış gibi kullanmamızı sağlar
function mapDispatchToProps(dispatch){
    return{
        actions:{
            getProducts:bindActionCreators(productActions.getProducts,dispatch),
            //sepete ürün ekleyeceğimiz için gerekli action metodunu propsa ekliyoruz
            addToCart:bindActionCreators(cartActions.addToCart,dispatch)
      }
    }
}

//Connect component ile store arasında ki bir köprü görevi görmektedir
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);


