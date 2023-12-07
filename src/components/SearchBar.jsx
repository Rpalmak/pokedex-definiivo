import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: '50px',
        alignItems: 'center',
        paddingRight: '10px',
        backgroundColor: '#f5f5f5',
        width: '350px',
        height: '70px',
        borderRadius: '4px',
      }}
    >
      <input
        type="text"
        placeholder="Buscar..."
        style={{
          border: 'none',
          outline: 'none',
          flex: 1,
          marginLeft: '5px',
          width: '350px',
          height: '50px',
          fontSize: '26px',
        }}
      />
      <FaSearch
        style={{
          cursor: 'pointer',
          marginLeft: '8px',
          fontSize: '20px',
        }}
      />
    </div>
  );
};

export default SearchBar;
