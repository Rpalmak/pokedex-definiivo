import React, { useContext, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PokemonLogo from "../assets/images/Pokemon.svg";
import PropTypes from "prop-types";
import { PokeContext } from '../context';

const Header = ({ imagenRegion, altText, nombre }) => {
  const { setRegion } = useContext(PokeContext);

  useEffect(() => {
    setRegion(nombre);
  }, [setRegion, nombre]);
  
  return (
    <>
      <Navbar
        expand="xl"
        style={{
          background: "linear-gradient(89deg, rgba(134,209,203,1) 0%, rgba(39,93,101,0.8799894957983193) 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(134, 209, 203, 0.8)", 
          backdropFilter: "blur(5px)",
          filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#86d1cb', endColorstr='#273d65', GradientType=1)"
        }}
        
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={PokemonLogo}
              alt="Pokemon Logo"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
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
      <div className="imageContainer"
      style={{
        backgroundImage: `url(${imagenRegion})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="darkOverlay"></div>
        <img src={imagenRegion} alt={altText} className="image" />
        <div className="textOverlay">
          <h1 className="TituloRegion">{nombre}</h1>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  imagenRegion: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
};
export default Header;
