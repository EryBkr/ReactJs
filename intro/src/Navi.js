import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import CartSummary from './CartSummary';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">E Commerce App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            {/* Menü üzerinde ürünlerin görülebilmesi için eklediğim Component */}
            {/* App.js den gelen cart dizisini CartSummary Componente gönderdim */}
            {/* Props içerisinde App.js den gelen fonksiyonumu CartSummaryFonksiyonuna gönderiyorum */}
           <CartSummary removeFromCart={props.removeFromCart} cart={props.cart}/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;