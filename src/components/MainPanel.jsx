import React from 'react';
import CardPokemonInput from '../components/CardPokemonInput';
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

function MainPanel() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];

  return (
    <div className='componenteMainGeneral d-flex flex-column'>
      <div
        className='mainPanel'
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CardPokemonInput regionname={lastSegment}/>
      </div>
    </div>
  );
}

MainPanel.propTypes = {
  lastSegment: PropTypes.string,
};

export default MainPanel;
