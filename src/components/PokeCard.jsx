import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

//iconos
import normalIcon from "../assets/images/typeIcons/normal.png";
import fireIcon from "../assets/images/typeIcons/fire.png";
import waterIcon from "../assets/images/typeIcons/water.png";
import grassIcon from "../assets/images/typeIcons/grass.png";
import electricIcon from "../assets/images/typeIcons/electric.png";
import iceIcon from "../assets/images/typeIcons/ice.png";
import fightingIcon from "../assets/images/typeIcons/fighting.png";
import poisonIcon from "../assets/images/typeIcons/poison.png";
import groundIcon from "../assets/images/typeIcons/ground.png";
import flyingIcon from "../assets/images/typeIcons/flying.png";
import psychicIcon from "../assets/images/typeIcons/psychic.png";
import bugIcon from "../assets/images/typeIcons/bug.png";
import rockIcon from "../assets/images/typeIcons/rock.png";
import ghostIcon from "../assets/images/typeIcons/ghost.png";
import dragonIcon from "../assets/images/typeIcons/dragon.png";
import darkIcon from "../assets/images/typeIcons/dark.png";
import steelIcon from "../assets/images/typeIcons/steel.png";
import fairyIcon from "../assets/images/typeIcons/fairy.png";

const tipoIconos = {
  normal: normalIcon,
  fire: fireIcon,
  water: waterIcon,
  grass: grassIcon,
  electric: electricIcon,
  ice: iceIcon,
  fighting: fightingIcon,
  poison: poisonIcon,
  ground: groundIcon,
  flying: flyingIcon,
  psychic: psychicIcon,
  bug: bugIcon,
  rock: rockIcon,
  ghost: ghostIcon,
  dragon: dragonIcon,
  dark: darkIcon,
  steel: steelIcon,
  fairy: fairyIcon,
};

const tipoColores = {
  normal: "#FFFAFA",
  fire: "#FF4500",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#151C21",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

function getColorForType(tipo) {
  if (tipoColores[tipo]) {
    return tipoColores[tipo];
  } else {
    console.warn(`Color not defined for type: ${tipo}, using default.`);
    return "#333";
  }
}

function getColorForTypes(types) {
  if (types.length === 1) {
    return getColorForType(types[0]);
  } else {
    const colors = types.map((tipo) => getColorForType(tipo));
    return colors.join(", ");
  }
}

export function PokeCard({ nombre, numero, imagen, tipo, height, weight }) {
  const formattedTipos = tipo.map((tipo) => (
    <span key={tipo} style={{ display: "flex", alignItems: "center" }}>
      <img
        src={tipoIconos[tipo]}
        alt={tipo}
        style={{ width: "80px", height: "24px", marginRight: "5px" }}
      />
    </span>
  ));

  const colors = tipo.map((tipo) => getColorForType(tipo));
  const [backgroundColor, setBackgroundColor] = useState(
    getColorForTypes(tipo)
  );

  useEffect(() => {
    console.log(`Background color: ${backgroundColor}`);
  }, [backgroundColor]);

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#555",
  };

  const infoStyle = {
    fontSize: "16px",
    color: "#333",
    margin: "5px 0",
    display: "Flex",
  };

  const cardStyle = {
    background: colors.length === 1 ? colors[0] : `linear-gradient(${colors})`,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#FFA500",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    margin: "10px 0",
  };
  const infoCardStyle = {
    pointerEvents: "none",
    userSelect: "none",
    margin: 0,
  };

  return (
    <div
      className="columnaPokemonCard text-center col-xxxxl-2 col-xxxl-3 col-xxl-3 col-xl-6 col-lg-12 col-sm-12 col-md-12 mb-4"
      style={{ pointerEvents: "none" }}
    >
      <Card className="poke-card" style={cardStyle}>
        <div className="card-image-container">
          <Card.Img
            variant="top"
            src={imagen}
            className="card-image"
            style={{ userSelect: "none", outline: "none" }}
          />
        </div>
        <Card.Body>
          <Card.Title style={titleStyle}>{nombre}</Card.Title>
          <div className="infoCard text-center" style={infoCardStyle}>
            <Card.Text style={labelStyle}>Type</Card.Text>
            <Card.Text style={infoStyle}>{formattedTipos}</Card.Text>
            <Card.Text style={labelStyle}>Number</Card.Text>
            <Card.Text style={infoStyle}>#{numero}</Card.Text>
            <div className="d-flex flex-row gap-2">
              <div
                className="d-flex flex-column"
                style={{ alignItems: "center" }}
              >
                <Card.Text style={labelStyle}>Height</Card.Text>
                <Card.Text style={infoStyle}>{height} m.</Card.Text>
              </div>
              <span>|</span>
              <div
                className="d-flex flex-column"
                style={{ alignItems: "center" }}
              >
                <Card.Text style={labelStyle}>Weight</Card.Text>
                <Card.Text style={infoStyle}>{weight} k.</Card.Text>
              </div>
            </div>
          </div>
          <Button variant="outline-dark" className="poke-card-button">
            View more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

PokeCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  tipo: PropTypes.array.isRequired,
  numero: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

export default PokeCard;
