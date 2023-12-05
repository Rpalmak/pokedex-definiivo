import React from 'react';
import Header from '../components/Header';
import HisuiImage from '../assets/images/regions/Hisui.webp'

function Hisui() {

  return (
    <>
      <Header imagenRegion={HisuiImage} nombre={"Hisui"}altText="Hisui Region" />
    </>
  );
}

export default Hisui;