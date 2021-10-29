import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import { Container } from 'reactstrap';
import Navi from "../navi/Navi";
import Dashboard from './Dashboard';
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Navi></Navi>
        {/* Routing için ekledik */}
        <Switch>
          {/* Anasayfa Dashboard olmuş oldu */}
          <Route path="/" exact component={Dashboard} />
          <Route path="/product" exact component={Dashboard} />
          <Route path="/cart" exact component={CartDetail}/>
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          {/* Şayet Id olmadan gidilmeye çalışınırsa boş sayfa ile karşılaşmayalım */}
          <Route path="/saveproduct/" component={AddOrUpdateProduct} />
          {/* Geçerli bir url mevcut değilse  NotFound sayfasına gönderiyoruz */}
          <Route  component={NotFound} />
        </Switch>
      </Container>
    )
  }
}

