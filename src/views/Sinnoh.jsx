import React from 'react';
import Header from '../components/Header';
import SinnohImage from '../assets/images/regions/Sinnoh.webp'

function Sinnoh() {

  return (
    <>
      <Header imagenRegion={SinnohImage} nombre={"Sinnoh"}altText="Sinnoh Region" />
    </>
  );
}

export default Sinnoh;