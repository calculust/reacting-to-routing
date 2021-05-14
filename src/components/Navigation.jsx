import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../images/Studio_Ghibli_logo.svg';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary px-3 mb-5" variant="dark">
            <Navbar.Brand href="/"><LogoImg src={Logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className="nav-link" activeClassName="active" to="/home">Home</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/films">Films</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/people">People</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/locations">Locations</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/species">Species</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/vehicles">Vehicles</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const LogoImg = styled.img`
    height:100px;
    filter: invert(100%);
`

export default Navigation
