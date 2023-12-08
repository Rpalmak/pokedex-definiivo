import React from 'react'
import ErrorImage from '../assets/images/error.png'

function error() {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      textAlign: 'center', 
      alignItems: 'center'}}>
      <img src={ErrorImage} style={{width: '500px', height:'500px'}}></img>
      <h1>Error 404</h1>
    </div>
  )
}

export default error