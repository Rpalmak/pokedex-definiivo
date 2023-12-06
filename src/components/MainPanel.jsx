import React from 'react';
import CardPokemonInput from '../components/CardPokemonInput';

function MainPanel() {
  return (
    <div className='mainPanel'
    style={{
      padding:'50px',
      backgroundSize: "cover",
      backgroundPosition: "center",
      background: "rgb(134, 209, 203)",
      backgroundImage: "linear-gradient(89deg, rgba(134, 209, 203, 1) 0%, rgba(39, 61, 101, 1) 100%)",
      filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#86d1cb', endColorstr='#273d65', GradientType=1)"
    }}>
      <CardPokemonInput/>
    </div>
  );
}

export default MainPanel;
