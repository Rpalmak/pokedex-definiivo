import React from 'react';
import CardPokemonInput from '../components/CardPokemonInput';
import SearchBar from './SearchBar';

function MainPanel() {
  
  return (
    <div className='componenteMainGeneral d-flex flex-column'>
      <SearchBar />
      <div className='mainPanel' 
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <CardPokemonInput />
      </div>
    </div>
  );
}

export default MainPanel;
