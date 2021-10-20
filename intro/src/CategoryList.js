//Componentler Pascal Case isimlendirmeyle oluşur
//rcc yazıp tab a basarsak class component i otomatik oluşturur
import React, { Component } from 'react'

//List group reactstrap ten gelen bir özellik
import {ListGroup,ListGroupItem} from "reactstrap";

export default class CategoryList extends Component {
   
//props başka componentten gönderilen datayı temsil eder    
constructor(props){
    //Component class ına gönderiyoruz oradan kalıtıyor zaten
    //BaseClass a gönderme nedenimiz this keyword ü CategoryList classına değil Component e karşılık geliyor(kalıtım alınan)
    super(props);

    //State component e ait datayı temsil eder
    this.state={
        categories:[{categoryId:1,categoryName:"Beverages"},{categoryId:2,categoryName:"Condiment"},{categoryId:3,categoryName:"Tech"}]
    };
}


//render componenti (sadece değişen componenti) değişikliklerini uygulayan bir fonksiyondur
 render() {
        return (
            <div>
                {/* Süslü parantezler JS kodu yazacağımı belirtiyor */}
                {/* AppComponent ten gönderdiğim info değişkenine eriştim */}
                <h3>{this.props.info.title}</h3>
               
                <ListGroup>
                    {
                        //state içerisinde bulunan categories içerisinde ki dataları dönerek menüyü oluşturdum
                        this.state.categories.map(category=>(

                        //React döngülerde key kullanmamızı ister ki html elemanları unique olsun.Bunu performans algoritması için talep eder
                         <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                 
              </ListGroup>
            </div>
        )
    }
}
