import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as cartActions from "../../redux/actions/cartActions";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
    Button
  } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class CartSummary extends Component {

    //Sepet boşken bize dönecek JSX
    renderEmpty(){
        return(
            <NavItem>
                <NavLink>Sepetiniz boş</NavLink>
          </NavItem>
        );
    }

    //cartList dolu ise
    renderSummary(){
        return(
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Sepetiniz
            </DropdownToggle>
            <DropdownMenu right>
                {
                    //alışveriş sepetimizi dönüyoruz
                    this.props.cartList.map(cartItem=>(
                        <DropdownItem key={cartItem.product.id}>
                        <Button onClick={()=>this.props.actions.removeToCart(cartItem.product.id)} className="bg-danger">X</Button>
                            {cartItem.product.productName} 
                            <Badge className="bg-primary">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))
                }
              <DropdownItem divider />
              <DropdownItem>
                <Link to={"/cart"}>Sepete Git</Link>
              </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
                {
                    //mapStateToProps aracılığıyla almıştık
                    //cartList boş ise başka dolu ise başka JSX göstereceğiz
                    this.props.cartList.length>0 ? this.renderSummary() : this.renderEmpty()
                }
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
export default connect(mapsStateToProps,mapDispatchToProps)(CartSummary);