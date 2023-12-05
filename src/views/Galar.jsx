import React from 'react';
import Header from '../components/Header';
import GalarImage from '../assets/images/regions/Galar.webp'

function Galar() {

  return (
    <>
      <Header imagenRegion={GalarImage} nombre={"Galar"}altText="Galar Region" />
    </>
  );
}

export default Galar;