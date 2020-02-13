import React, { Component } from 'react';
import { Navbar , Nav, Button , NavDropdown} from 'react-bootstrap';
import './TopMenu.css'

class TopMenu extends Component {
    render() {
        return (
            <div className="TopMenu">
                <Navbar collapseOnSelect className="TopMenu" expand="lg" fixed="top" variant="dark">
                    <Navbar.Brand href="#home">UBIM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="TopMenuItems">
                        <NavDropdown title="بیمه خودرو" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">شخص ثالث</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">وبلاگ</Nav.Link>
                        <Nav.Link href="#about">درباره ما</Nav.Link>
                        <Nav.Link href="#contact">تماس با ما</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">
                        <Nav.Link href="#deets">
                            <Button variant="warning" style={{fontFamily:'yekan'}}>ورود / ثبت نام</Button>
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default TopMenu;