import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import iml from './images/sa.jpg';
import iml1 from './images/lin1.jpg';
import iml2 from './images/insta1.jpg';
import iml3 from './images/linh.png';
import iml4 from './images/insh.jpg';

export default function Box() {

     // Handler for Instagram logo hover
  const handleInstagramHover = (event) => {
    event.target.style.filter = <img src={iml4} alt='in' width='33px' height='33px'/> ; // Invert colors on hover
  };

  // Handler for LinkedIn logo hover
  const handleLinkedInHover = (event) => {
    event.target.style.filter = <img src={iml3} alt='lin' width='33px' height='33px'/> ; // Invert colors on hover
  };
  return (
    <>
     <div className="co">
  <div className="image-container">
    <img src={iml} alt="Your Image" width='310px' height='100px' margin-top='10px' />
  </div>
  <div className="content">
    <p style={{color:'#C33764'}}>HELLO EVERYBODY, I AM </p>
    <h1>AKANKSHYA PRADHAN</h1>
    <p class="text-with-underline"><b>FRONTEND DEVELOPER, BLOCKCHAIN ENTHUSIAST</b></p>
    <hr/>
    <hr/>
    <p style={{fontFamily:'Times New Roman', fontSize:'23px'}}>As a frontend developer, I excel in creating captivating digital experiences by blending creativity with technical prowess. My passion for design and problem-solving drives me to craft intuitive user interfaces that engage and inspire. Embracing my role as a beginner in blockchain, I eagerly explore the decentralized landscape, driven by a thirst for knowledge and a commitment to innovation. I aspire to merge my frontend expertise with blockchain technology to shape the future of digital interaction.</p>
    <hr/>
  </div>

  <div className="cl">
   {/* Instagram logo */}
   <a href="https://www.instagram.com/aka_thangs/" target="_blank" rel="noopener noreferrer">
        <img src={iml2} alt="Instagram" width='33px' height='33px' onMouseEnter={handleInstagramHover} onMouseLeave={(event) => event.target.style.filter = ''} />
      </a>

      {/* LinkedIn logo */}
      <a href="https://www.linkedin.com/in/akankshya-pradhan-880877264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ4wpSIWST7iE8FztOoeS6g%3D%3D" target="_blank" rel="noopener noreferrer">
        <img src={iml1} alt="LinkedIn" width='33px' height='33px' onMouseEnter={handleLinkedInHover} onMouseLeave={(event) => event.target.style.filter = ''} />
      </a>
    </div>
</div>
 
    </>
  )
}
