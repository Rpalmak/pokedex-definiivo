import React from 'react'

function PokeDetails({ handleCloseModal, nombre }) {
  return (
    <div>
      <h2>{nombre}</h2>
      {/* Agrega aquí el contenido adicional que desees mostrar en el modal */}
      <button onClick={handleCloseModal}>Close</button>
    </div>
  )
}

export default PokeDetails