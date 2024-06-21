import React from "react";
import "./index.css";
import { Navbar, Nav, Container} from "react-bootstrap";
import logo from "./logo.png";

function MainNavbar() {
  return (
    <div>
        <Navbar className="nav-color" collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand className="brand">
                    <a href="/">
                        <img src = {logo} style = {{width: 40, marginTop: -7}} alt="logo" className="brand-logo" />
                        <span>Yash donation</span>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-nav-bar" />
                <Navbar.Collapse id = "responsive-nav-bar" >
                    <Nav className="nav">
                        <Nav.Link 
                            className="navlink"
                            href = ""
                            target="_blank"
                        >Transaction history 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default MainNavbar;