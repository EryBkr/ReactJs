import React, { Component } from 'react'
import { Container } from 'reactstrap';
import Navi from "../navi/Navi";
import Dashboard from './Dashboard';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Navi></Navi>
        <Dashboard></Dashboard>
      </Container>
    )
  }
}

