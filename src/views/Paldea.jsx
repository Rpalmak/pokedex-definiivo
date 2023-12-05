import React from 'react';
import Header from '../components/Header';
import PaldeaImage from '../assets/images/regions/Paldea.webp'

function Paldea() {

  return (
    <>
      <Header imagenRegion={PaldeaImage} nombre={"Paldea"}altText="Paldea Region" />
    </>
  );
}

export default Paldea;