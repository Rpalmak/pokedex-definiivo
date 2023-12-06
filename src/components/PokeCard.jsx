import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";

function PokeCard({nombre, peso, imagen}) {
  return (
    <div>
    <Card style={{ width: '18rem', margin:'15px' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <img src=""></img>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {peso}
        </Card.Text>
        <Button variant="success">Ver más</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
PokeCard.propTypes = {
    nombre: PropTypes.string.isRequired,
  };
export default PokeCard