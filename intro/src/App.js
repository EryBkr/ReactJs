import { Container,Row,Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import React, { Component } from 'react'

export default class App extends Component {
  
  state={currentCategory:""};

  //category i değiştirecek arrow function
  changeCategory=(category)=>{
    //this.setState state içerisinde ki datayı değiştirmemizi sağlayan bir fonksiyon
    this.setState({currentCategory:category.categoryName})
};
  
  render() {
  let productInfo={title:"Ürün Listesi",id:5};
  let categoryInfo={title:"Kategori Listesi"};
  
     //JSX kullanımı (aşağıdaki div aslında HTML tagi değildir)
     //Buraya yazacağımız tag ler div içerisinde olmalıdır
    return (
      <div>
        {/* Container ve Row ReactStrap kütüphanesinden geliyor */}
        <Container>
          <Row>
              {/* Navi bizim oluşturduğumuz componenttir */}
              <Navi></Navi>
          </Row>
          <Row>
            {/* Aynı Bootstrap kullanımı gibi */}
            <Col xs="3">
              {/* CategoryList bizim oluşturduğumuz componenttir */}
              {/* info değişkeni içerisinde ki datayı CategoryList componente gönderiyorum */}
              {/* React içerisinde data alışverişi sadece üst komponentten alt komponente desteklendiği için categoryComponent içerisinde olması gereken fonksiyon ve değişkeni buraya transfer ettik */}
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={productInfo}></CategoryList>
            </Col>
            <Col xs="9">
              {/* ProductList bizim oluşturduğumuz componenttir */}
              {/* info değişkeni içerisinde ki datayı ProductList componente gönderiyorum */}
              <ProductList currentCategory={this.state.currentCategory} info={categoryInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

