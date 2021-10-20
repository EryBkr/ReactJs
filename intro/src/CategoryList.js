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
    //State deki bir data değiştiği zaman onu kullanan her yerde refresh işlemi olur (sadece onun bulunduğu bölüm değişir)
    this.state={
        //Apiden gelen datayı buraya atacağız
        categories:[]
    };
}

//Component Yerleştiğinde çalışacak
componentDidMount(){
   //Api ye git kategori bilgilerini al 
  this.getCategories();
}

//Api ye istek atıyoruz
getCategories=()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data})); //apiden gelen json datasını categories dizisine atıyorum
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
                        //onClick olduğunda currentcategory de ki değer tıklanan category nin ismi ile değişsin
                        //Tıklanan kategorinin ismine göre menü deki active class ına true ya da false vererek background blue özelliğini veriyoruz
                         <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false} onClick={()=>this.props.changeCategory(category) } key={category.id}>{category.categoryName}</ListGroupItem>
                        ))
                    }
              </ListGroup>
            </div>
        )
    }
}
