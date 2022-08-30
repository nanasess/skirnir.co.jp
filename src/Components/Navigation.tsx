import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component<any, {}> {
    public render() {
        const navbar: JSX.Element = (
            <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand href="#">スキルニル株式会社</Navbar.Brand>
                    <Navbar.Toggle type="button" area-controls="navbarResponsive">
                        <span className="navbar-toggler-icon" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarResponsive" className="justify-content-end">
                        <Nav className="ml-auto" as="ul">
                            <Nav.Item as="li">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to="/about" className="nav-link">
                                    About
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to="/services" className="nav-link">
                                    Services
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to="/contact" className="nav-link">
                                    Contact
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to="/tradelaw" className="nav-link">
                                    Tradelaw
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
        return navbar;
    }
}

export default Navigation;
