import React, { Component } from 'react';

//Table reactstrap ten gelen bir özellik
import {Table,ButtonToggle} from "reactstrap";

export default class ProductList extends Component {


    render() {
        return (
            <div>
                {/* props başka componentten gönderilen datayı temsil eder   */}
                <h3>{this.props.info.title}</h3>
                <p>{this.props.info.id}</p>
                <h4>Seçilen Kategori: {this.props.currentCategory}</h4>

              <Table>
                <thead>
                  <tr>
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
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                {/* App componentin den gelen addToCart fonksiyonuna ekliyorum */}
                                <td> <ButtonToggle onClick={()=>this.props.addToCart(product)} color="info">add</ButtonToggle></td>
                           </tr>
                          ))
                        }
                </tbody>
              </Table>
            </div>
        )
    }
}
