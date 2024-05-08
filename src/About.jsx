import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import placeholderImage from './images/abt.avif';

export default function About() {

    const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <div className='abt'>
      <div className="left-side">
        <h2>About Myself</h2>
        <p>
        Driven by an insatiable curiosity to explore new technologies, I am deeply passionate about frontend development. Continuously seeking to expand my knowledge and skill set, I thrive on the dynamic nature of the field. With a relentless drive for innovation and a keen eye for design, I am dedicated to crafting engaging user experiences that leave a lasting impact.
        </p>
        <hr/>
        <button
      className={`button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      DOWNLOAD CV
    </button>
      </div>
     <div className="image-overlay">
        <img src={placeholderImage} alt="Placeholder" className="image" />
        <div className="overlay"></div>
        <div className="text"><h5>"   "</h5></div>
      </div>
      </div>
    </>
  )
}
