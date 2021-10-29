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
import CartSummary from '../cart/CartSummary';
import { Link  } from 'react-router-dom';


//Navbar componentimiz
const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/">E Commerce</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/saveproduct">Ürün Ekle</Link></NavLink>
            </NavItem>
           {/* Alışveriş sepeti gözükecek */}
           <CartSummary></CartSummary>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;