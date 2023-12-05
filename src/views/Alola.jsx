import React from 'react';
import Header from '../components/Header';
import AlolaImage from '../assets/images/regions/Alola.webp'

function Alola() {

  return (
    <>
      <Header imagenRegion={AlolaImage} nombre={"Alola"}altText="Alola Region" />
    </>
  );
}

export default Alola;