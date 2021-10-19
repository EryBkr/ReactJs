import { Container,Row,Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {

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
            <CategoryList></CategoryList>
          </Col>
          <Col xs="9">
            {/* ProductList bizim oluşturduğumuz componenttir */}
            <ProductList></ProductList>
          </Col>
        </Row>
      </Container>

  

     
    </div>
  );
}

export default App;
