import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logoImg from './images/webweaver.jpeg'; // Import your logo image


export default function Na() {
  const navigateToAboutPage = (event) => {
    event.preventDefault();
    window.location.href = '/C:\Users\akankshya pradhan\OneDrive\Desktop\port_react\personal-portfolio\src\Ab.jsx';
  };


  return (
    <>
    <div className='topbar'>

    <div className='logo'>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logoImg} alt="Logo" width="32" height="30" className="d-inline-block align-text-top"/>
      " "WEBWEAVER
      
    </a>
  </div>
</nav>
    </div>

<div className='container'>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
<div className="container-fluid">
<a className="navbar-brand" href="#">WebWeaver</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"/>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/C:\Users\akankshya pradhan\OneDrive\Desktop\port_react\personal-portfolio\src\Ab.jsx" onClick={navigateToAboutPage}>About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Skills</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Contact</a>
    </li>
    
  </ul>
</div>
</div>
</nav>
</div>
</div>
    </>
  )
}
