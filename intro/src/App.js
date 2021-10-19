import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {

  //JSX kullanımı (aşağıdaki div aslında HTML tagi değildir)
  //Buraya yazacağımız tag ler div içerisinde olmalıdır
  return (
    <div>
      {/* Navi bizim oluşturduğumuz componenttir */}
      <Navi></Navi>

      {/* CategoryList bizim oluşturduğumuz componenttir */}
      <CategoryList></CategoryList>

      {/* ProductList bizim oluşturduğumuz componenttir */}
      <ProductList></ProductList>
    </div>
  );
}

export default App;
