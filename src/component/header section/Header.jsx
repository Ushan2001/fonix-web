import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div style={{ position: "relative", backgroundColor: "#f9bcec, #FFF6F6, white", height: "700px" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/images/bf0de7c4078ea399d080a0d7af8b976f.jpeg')", opacity: "5%" }}>
        </div>
        <header style={{ position: "relative" }}>

          {/* Text */}
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <h6 className="navbar-text" style={{ color: "white", textAlign: "center" }}>"Award-Winning Innovation at Your Fingertips: Fonix Software Solutions Pvt Ltd - Empowering Digital Transformation, Strategic Business Growth, and Cutting-Edge Creativity for Tomorrow's Success."</h6>
            </div>
          </nav>

          {/* Logo */}
          <img
            src="/images/Fonix logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: '148px', maxHeight: '111px', marginLeft: "15px", marginTop: "10px" }}
          />

          {/* Company Image */}
          <img
            src="/images/fonix.png"
            alt="Logo"
            className="img-fluid"
            style={{ float: 'right', marginRight: '30px', marginTop: '10px' }}
          />

<div className="p-3 p-md-5 text-center bg-image" style={{ marginTop: "100px", textAlign: 'center' }}>
  <div className="mask">
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h4 className="mb-3" style={{ color: 'black' }}>Welcome to</h4>

        <div className="mb-3" style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ color: '#1E3447', fontFamily:"Inter", fontSize:"68px" }}>FONIX</h1>
          <h1 style={{ color: 'red', marginTop: '10px' }}>Software Solutions</h1>
        </div>

        <h1 className="mb-3">Pvt Ltd.</h1>

        <a
          data-mdb-ripple-init
          className="btn btn-outline-light btn-lg"
          href="#!"
          role="button"
          style={{ backgroundColor: "#EC2E25", borderRadius: "40px", border: "none", marginTop: "-20px" }}
        >
          Contact Us&nbsp;<i className="fas fa-headphones"></i>
        </a>
      </div>
    </div>
  </div>
</div>

        </header>
      </div>
    );
  }
}

export default Header;
