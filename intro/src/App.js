import { Container,Row,Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import React, { Component } from 'react';
import alertify from "alertifyjs";
import { Route, Switch } from "react-router";
import NotFound from "./NotFound";
import CartList from "./CartList";

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

    //Başarılı bir şekilde eklendiğine dair alertify mesajı gönderiyoruz
    alertify.success("Ürün başarıyla eklendi");
  }

  //Cart tan ürün çıkartmak için kullanacağımız fonksiyon
  removeFromCart=(product)=>{
    //Cart dizisi içerisinden verilen üründen farklı olanları geri dönecek 
    let newCart=this.state.cart.filter(c=>c.product.id!==product.id);

    //elde ettiğimiz diziyi state içerisinde ki cart dizisine set ediyoruz
    this.setState({cart:newCart});

    //Ürün sepetten çıkartıldığı zaman uyarı vereceğiz
    alertify.error("Product removed from cart");
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
          {/* Navi bizim oluşturduğumuz componenttir */}
          {/* alışveriş sepetini navbar a gönderdim */}
          {/* Ürün çıkartma fonksiyonunu Navi componente oradan da CartSummary componentine gönderiyorum */}
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}></Navi>
          <Row>
            {/* Aynı Bootstrap kullanımı gibi */}
            <Col xs="3">
              {/* CategoryList bizim oluşturduğumuz componenttir */}
              {/* info değişkeni içerisinde ki datayı CategoryList componente gönderiyorum */}
              {/* React içerisinde data alışverişi sadece üst komponentten alt komponente desteklendiği için categoryComponent içerisinde olması gereken fonksiyon ve değişkeni buraya transfer ettik */}
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={productInfo}></CategoryList>
            </Col>
            <Col xs="9">

              {/* Switch sırasıyla Root ları gezerek ilerler */}
              <Switch>
                {/* Bir çok parametre gereken componentleri bu şekilde render ederek route layabiliriz */}
                <Route exact path="/" render={
                    props=>(
                      <ProductList
                      {...props} 
                      addToCart={this.addToCart} 
                      products={this.state.products} 
                      currentCategory={this.state.currentCategory} 
                      info={categoryInfo}></ProductList>
                    )
                } />
                {/* Sepete gitmek istediğimiz de gerekli event ve dataları render ederek gönderip geçiş yapabiliriz */}
                <Route exact path="/cart" render={
                    props=>(
                      <CartList
                      {...props} 
                      removeFromCart={this.removeFromCart} 
                      cart={this.state.cart} >
                      </CartList>
                    )
                } />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

