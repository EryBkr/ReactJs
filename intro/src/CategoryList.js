//Componentler Pascal Case isimlendirmeyle oluşur
//rcc yazıp tab a basarsak class component i otomatik oluşturur
import React, { Component } from 'react'

//List group reactstrap ten gelen bir özellik
import {ListGroup,ListGroupItem} from "reactstrap";

export default class CategoryList extends Component {
   
constructor(props){
    //Component class ına gönderiyoruz oradan kalıtıyor zaten
    //BaseClass a gönderme nedenimiz this keyword ü CategoryList classına değil Component e karşılık geliyor(kalıtım alınan)
    super(props);
    state:{};
}


//render componenti (sadece değişen componenti) değişikliklerini uygulayan bir fonksiyondur
 render() {
        return (
            <div>
                {/* Süslü parantezler JS kodu yazacağımı belirtiyor */}
                {/* AppComponent ten gönderdiğim info değişkenine eriştim */}
                <h3>{this.props.info.title}</h3>
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
