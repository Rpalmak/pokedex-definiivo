import React, { useContext, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PokemonLogo from "../../assets/images/pokemon.svg";
import PropTypes from "prop-types";
import { PokeContext } from '../../context';


const Header = ({ region }) => {
  const { setRegion } = useContext(PokeContext);
  console.log(region);

  useEffect(() => {
    setRegion(region);
  }, [setRegion, region]);
  
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
            <Nav>
              <NavLink to={`/${region}`} className="nav-link">
                Back           
              </NavLink>
            </Nav>
        </Container>
      </Navbar>
      
    </>
  );
};

Header.propTypes = {
  region: PropTypes.string,
};
export default Header;
