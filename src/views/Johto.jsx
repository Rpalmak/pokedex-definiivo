import React from 'react';
import SubHeader from '../components/SubHeader';
import JohtoImage from '../assets/images/regions/johto.png'

function Johto() {

  return (
    <>
      <SubHeader imagenRegion={JohtoImage} nombre={"Johto"}altText="Kanto Region" />
    </>
  );
}

export default Johto;
