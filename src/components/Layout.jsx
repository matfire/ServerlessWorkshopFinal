import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { Container } from "reactstrap";
import { withFirebase } from "./Firebase";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBBtn } from "mdbreact";

const Layout = ({firebase}) => {
  return (
    <div>
        <MDBNavbar color="blue" dark expand="md">
          <MDBNavbarBrand>
            <strong><a href="/">StrawTek</a></strong>
          </MDBNavbarBrand>
        </MDBNavbar>
    <Container fluid>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Container>
    </div>
  );
};

export default withFirebase(Layout);
