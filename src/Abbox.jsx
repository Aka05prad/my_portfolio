import React from 'react'
import grayscaleImage from './images/AA.jpg'; 

export default function Abbox() {
  return (
    <>
      <div className="about-me-box">
      <h2>About Me</h2>
      <p>Blockchain enthusiast | Frontend Developer</p>
    </div>

    <div className="grayscale-image-container">
        <img src={grayscaleImage} alt="Grayscale Image" className="grayscale-image" />
      </div>

    </>
  )
}
