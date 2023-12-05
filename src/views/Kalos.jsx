import React from 'react';
import Header from '../components/Header';
import KalosImage from '../assets/images/regions/Kalos.webp'

function Kalos() {

  return (
    <>
      <Header imagenRegion={KalosImage} nombre={"Kalos"}altText="Kalos Region" />
    </>
  );
}

export default Kalos;