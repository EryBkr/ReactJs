import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import { Container } from 'reactstrap';
import Navi from "../navi/Navi";
import Dashboard from './Dashboard';
import CartDetail from "../cart/CartDetail";

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
        </Switch>
      </Container>
    )
  }
}

