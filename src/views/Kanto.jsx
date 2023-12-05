import React from 'react';
import Header from '../components/Header';
import kantoImage from '../assets/images/regions/kanto.png'

function Kanto() {

  return (
    <>
      <Header imagenRegion={kantoImage} nombre={"Kanto"} altText="Kanto Region" />
    </>
  );
}

export default Kanto;
