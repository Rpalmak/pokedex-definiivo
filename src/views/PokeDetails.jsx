import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import HeaderDetails from '../components/pokeDetails/HeaderDetails';
import PropTypes from "prop-types";
import MainPanelDetails from '../components/pokeDetails/MainPanelDetails';

function PokeDetails() {
  const { region, nombre } = useParams();
  const location = useLocation();
  const { state } = location;

  console.log("Información de la ubicación:", location);
  console.log("ImagenSprite en PokeDetails:", state && state.imagenSprite);

  if (!state || !state.imagenSprite) {
    console.error("Error: No se encontró la información de la imagen en state");
    return <div>Error en la carga de detalles.</div>;
  }

  const { imagenSprite } = state;

  return (
    <div>
      <HeaderDetails region={region} />
      <MainPanelDetails
        nombre={nombre}
        imagenSprite={imagenSprite}
      />
    </div>
  );
}

export default PokeDetails;