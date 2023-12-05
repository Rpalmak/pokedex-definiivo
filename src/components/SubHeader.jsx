import React from 'react';
import PropTypes from 'prop-types';

function SubHeader({ imagenRegion, altText, nombre }) {
  return (
    <div className="imageContainer">
      <div className="darkOverlay"></div>
      <img src={imagenRegion} alt={altText} className="image" />
      <div className="textOverlay">
        <h1 className='TituloRegion'>{nombre}</h1>
      </div>
    </div>
  );
}

SubHeader.propTypes = {
  imagenRegion: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
};

export default SubHeader;
