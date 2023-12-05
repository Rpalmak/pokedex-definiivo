import React from 'react';
import Header from '../components/Header';
import JohtoImage from '../assets/images/regions/johto.png'

function Johto() {

  return (
    <>
      <Header imagenRegion={JohtoImage} nombre={"Johto"}altText="Johto Region" />
    </>
  );
}

export default Johto;
