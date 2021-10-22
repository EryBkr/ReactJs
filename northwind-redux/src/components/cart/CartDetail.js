import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from 'redux';
import { Table,Button } from 'reactstrap';
import alertify from "alertifyjs";

//Sepete Detayı
class CartDetail extends Component {
    render() {
        return (
            <div>
                 <Table>
                     <thead>
                       <tr>
                         <th>#</th>
                         <th>Product Name</th>
                         <th>Unit Price</th>
                         <th>Quantity</th>
                         <th></th>
                       </tr>
                     </thead>
                     <tbody>
                         {
                             this.props.cartList.map(cartItem=>( 
                             <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button className="bg-danger" onClick={()=>this.props.actions.removeToCart(cartItem.product.id)}>
                                        X
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

//Silme işleminde state güncellemesi yapacağım için action a erişmem gerekiyor
function mapDispatchToProps(dispatch){
    return{
        actions:{
            //payload göndereceğim ve gerekli action oluşarak reducer tarafında state güncellemesi yapılacak
            //yani sepetten gerekli ürünü silecek
            removeToCart:bindActionCreators(cartActions.removeToCart,dispatch)
        }
    }
}

//Alışveriş sepetine store da bulunan state aracılığıyla erişiyorum
function mapsStateToProps(state){
    return {
        //store da bulunan cardReducer datasına ulaşıyorum ve liste olarak göstereceğim
        cartList:state.cartReducer
    }
}

//Store ,Component bağlantısı
export default connect(mapsStateToProps,mapDispatchToProps)(CartDetail);
