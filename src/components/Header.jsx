import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PokemonLogo from '../assets/images/Pokemon.svg';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={PokemonLogo} alt="Pokemon Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/Kanto" className="nav-link">
              Kanto
            </NavLink>
            <NavLink to="/Johto" className="nav-link">
              Johto
            </NavLink>
            <NavLink to="/Hoenn" className="nav-link">
             Hoenn
            </NavLink>
            <NavLink to="/Sinnoh" className="nav-link">
            Sinnoh
            </NavLink>
            <NavLink to="/Hisui" className="nav-link">
            Hisui
            </NavLink>
            <NavLink to="/Unova" className="nav-link">
            Unova
            </NavLink>
            <NavLink to="/kalos" className="nav-link">
            kalos
            </NavLink>
            <NavLink to="/Alola" className="nav-link">
            Alola
            </NavLink>
            <NavLink to="/galar" className="nav-link">
            galar
            </NavLink>
            <NavLink to="/Paldea" className="nav-link">
            Paldea
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
