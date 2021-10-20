import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink
  } from 'reactstrap';

//Cart  UI on Menu
export default class CartSummary extends Component {

    //Cart içerisinde ürün yoksa Navbar da görünmesin
    //Bu fonksiyon JSX tipinde data dönecek
    renderSummary(){
            return(
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {/* App.js den gönderdiğimiz cart dizisinin boyutunu yazdırıyoruz */}
                  Your Cart - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                   {
                       //Cart içerisinde ki ürünleri listeleyeceğim
                       this.props.cart.map(cartItem=>(
                          <DropdownItem key={cartItem.product.id}>
                              {/* Navi.js den gelen ve app.js ye bağlanan silme fonksiyonu */}
                              <Badge onClick={()=>this.props.removeFromCart(cartItem.product)} className="bg-danger">X</Badge>
                              {cartItem.product.productName}
                              <Badge className="bg-success">{cartItem.quantity}</Badge>
                        </DropdownItem>
                       ))
                   }
                  <DropdownItem divider />
                  <DropdownItem>
                     {/* Cart componentine bizi götürecek link */}
                    <Link to="cart">Cart List</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            );
    }

    //Alışveriş sepeti boş ise görünecek olan UI
    renderEmptyCart(){
        return(
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        );
    }

    render() {
       
        return (
            <div>
                {
                    this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()
                }
            </div>
        )
    }
}
