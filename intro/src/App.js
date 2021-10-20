import { Container,Row,Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import React, { Component } from 'react'

export default class App extends Component {

  //State Yapıcı metotta olmak zorunda değil
  state={currentCategory:"",products:[],categoryId:0,cart:[]};

  //Component oluştuğu zaman çalışacak olan fonksiyon
  componentDidMount(){
    this.getProducts();
  }

  //category i değiştirecek arrow function
  changeCategory=(category)=>{
    //this.setState state içerisinde ki datayı değiştirmemizi sağlayan bir fonksiyon
    this.setState({currentCategory:category.categoryName});

    //Category componentten kategori menüsüne tıklanınca burası tetiklenecek ve id atamasını state içerisinde ki categoryId property ime yapacak (props ile gönderdik çünkü)
    this.setState({categoryId:category.id});

    //Category e tıklandığında tıklanan category id ile filtreleme yapıyoruz
    this.getProducts(this.state.categoryId);

};

//ürünleri apiden çağıracak olan metot
//categoryId ile filtrelemek için ekledim
getProducts=(categoryId)=>{
  let url="http://localhost:3000/products";

  //Filtre gelmiş mi
  if(categoryId>0){
    url+="/?categoryId="+categoryId;
  }

  

  fetch(url)
  .then(response=>response.json())
  .then(data=>this.setState({products:data})); //state de bulunan products dizisine gelen datayı atıyorum
}

  //Sepete ürün ekleme metodu
  addToCart=(product)=>{
    //State içerisinde bulunan cart dizisini newCart değişkenine atıyorum
    let newCart=this.state.cart;

    //Bu ürün daha önce sepete eklenmiş mi
    var addedItem=newCart.find(c=>c.product.id===product.id);

    if(addedItem){
      //ürün daha önce sepete eklenmiş adedini güncellesek yeterli
      addedItem.quantity+=1;
      }
      else{
        //daha önce bu ürün sepete eklenmemiş artık ekleme işlemini yapıyorum
        //sepete ürün ve added bilgisini giriyorum
        newCart.push({product:product,quantity:1});
      }
  
    //State içerisinde ki cart dizisini güncelledim
    this.setState({cart:newCart});
  }
 
  
  render() {
  let productInfo={title:"Ürün Listesi",id:5};
  let categoryInfo={title:"Kategori Listesi"};
  
     //JSX kullanımı (aşağıdaki div aslında HTML tagi değildir)
     //Buraya yazacağımız tag ler div içerisinde olmalıdır
    return (
      <div>
        {/* Container ve Row ReactStrap kütüphanesinden geliyor */}
        <Container>
          {/* Navi bizim oluşturduğumuz componenttir */}
          {/* alışveriş sepetini navbar a gönderdim */}
          <Navi cart={this.state.cart}></Navi>
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
              {/* props ile apiden gelen product listemi gönderdim */}
              {/* props ile beraber addToCart fonksiyonumu ProductList e gönderdim */}
              <ProductList addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} info={categoryInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

