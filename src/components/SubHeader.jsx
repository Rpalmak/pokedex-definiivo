import React from 'react';
import PropTypes from 'prop-types';

function SubHeader({ imagenRegion, altText }) {
  return (
    <div>
      <img src={imagenRegion} alt={altText} />
    </div>
  );
}

SubHeader.propTypes = {
  imagenRegion: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default SubHeader;
