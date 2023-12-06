import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function PokeCard({ nombre, peso, imagen, tipo }) {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
      <Card className="poke-card">
        <div className="card-image-container">
          <Card.Img variant="top" src={imagen} className="card-image" />
        </div>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <span className="label">Tipo:</span> {tipo}
          </Card.Text>
          <Card.Text>
            <span className="label">Peso:</span> {peso}
          </Card.Text>
          <Button variant="outline-dark" className="poke-card-button">
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

PokeCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  peso: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
};

export default PokeCard;
