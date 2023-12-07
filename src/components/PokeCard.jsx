import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

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
  // Check if the type has a defined color.
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

export function PokeCard({ nombre, numero, imagen, tipo }) {
  const formattedTipos = tipo.join(" | ");

  const colors = tipo.map((tipo) => getColorForType(tipo));
  const [backgroundColor, setBackgroundColor] = useState(
    getColorForTypes(tipo)
  );

  useEffect(() => {
    console.log(`Background color: ${backgroundColor}`);
  }, [backgroundColor]);

  // Define styles before using them
  const cardTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#555',
  };

  const infoStyle = {
    fontSize: '16px',
    textTransform: 'capitalize',
    color: '#333',
    margin: '5px 0',
  };

  const cardStyle = {
    background: colors.length === 1 ? colors[0] : `linear-gradient(${colors})`,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    pointerEvents: "none",
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
  const buttonStyle = {
    userSelect: "none",
  };

  return (
    <div
  className="col-xxxxl-2 col-xxxl-3 col-xxl-3 col-xl-6 col-lg-12 col-sm-12 col-md-12 mb-4"
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
        <Card.Body style={infoCardStyle}>
          <Card.Title style={titleStyle}>{nombre}</Card.Title>
          <div className="infoCard" style={cardTextStyle}>
            <Card.Text style={labelStyle}>Type</Card.Text>
            <Card.Text style={infoStyle}>{formattedTipos}</Card.Text>
            <Card.Text style={labelStyle}>Number</Card.Text>
            <Card.Text style={infoStyle}>{numero}</Card.Text>
          </div>
          <Button
            variant="outline-dark"
            className="poke-card-button"
            style={buttonStyle}
          >
            View more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PokeCard;

PokeCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  tipo: PropTypes.array.isRequired,
  numero: PropTypes.number.isRequired,
};
