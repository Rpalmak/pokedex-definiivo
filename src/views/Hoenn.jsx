import React from 'react';
import Header from '../components/Header';
import HoenImage from '../assets/images/regions/Hoenn.webp'

function Hoenn() {

  return (
    <>
      <Header imagenRegion={HoenImage} nombre={"Hoenn"}altText="Hoenn Region" />
    </>
  );
}

export default Hoenn;
