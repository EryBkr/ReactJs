//Componentler Pascal Case isimlendirmeyle oluşur
//rcc yazıp tab a basarsak class component i otomatik oluşturur
import React, { Component } from 'react'

//List group reactstrap ten gelen bir özellik
import {ListGroup,ListGroupItem} from "reactstrap";

export default class CategoryList extends Component {
   
    //render componenti (sadece değişen componenti) değişikliklerini uygulayan bir fonksiyondur
 render() {
        return (
            <div>
                <ListGroup>
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Morbi leo risus</ListGroupItem>
                  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </div>
        )
    }
}
