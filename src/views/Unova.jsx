import React from 'react';
import Header from '../components/Header';
import UnovaImage from '../assets/images/regions/Unova.webp'

function Unova() {

  return (
    <>
        <Header imagenRegion={UnovaImage} nombre={"Unova"}altText="Unova Region" />
    </>
  );
}

export default Unova;