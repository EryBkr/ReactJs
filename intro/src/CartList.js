import React, { Component } from 'react'
import { Button, Table } from 'reactstrap';

//Sepet Detayı
export default class CartList extends Component {

    //Geriye JSX formatında sepet detayını dönen fonksiyon
    renderCart(){
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                         this.props.cart.map(cartItem=>(
                             <tr key={cartItem.product.id}>
                                 <td>{cartItem.product.id}</td>
                                 <td>{cartItem.product.categoryId}</td>
                                 <td>{cartItem.product.productName}</td>
                                 <td>{cartItem.product.unitPrice}</td>
                                 <td>{cartItem.product.unitsInStock}</td>
                                 <td>{cartItem.product.quantity}</td>
                                 <td>{cartItem.product.id}</td>
                                 <td>
                                     <Button onClick={()=>this.props.removeFromCart(cartItem.product)} className="bg-danger">X</Button>
                                </td>
                             </tr>
                         ))   
                    }
                </tbody>
            </Table>
        );
    }

    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
