import { Container,Row,Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {

  //Obje gönderimmi için oluşturduk
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
            <CategoryList info={productInfo}></CategoryList>
          </Col>
          <Col xs="9">
            {/* ProductList bizim oluşturduğumuz componenttir */}
            {/* info değişkeni içerisinde ki datayı ProductList componente gönderiyorum */}
            <ProductList info={categoryInfo}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
