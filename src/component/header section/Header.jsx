import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
  render() {
    return (
      <div style={{ position: "relative", height: "810px" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/images/bg.png')", rotate:"-0 deg" }}>
        </div>
        <header style={{ position: "relative" }}>

         {/* Text */}
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <h6 className="navbar-text fonix" style={{ color: "white", textAlign: "center", fontFamily:"Inter", fontWeight:"600", fontSize:"16px", lineHeight:"19.36px" }}>
    <span>
    "Award-Winning Innovation at Your Fingertips: Fonix Software Solutions Pvt Ltd - Empowering Digital Transformation, Strategic Business Growth, and Cutting-Edge Creativity for Tomorrow's Success."
  </span>
    </h6>
  </div>
</nav>
          {/* Logo */}
          <img
            src="/images/Fonix logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: '148px', maxHeight: '111px', marginLeft: "92px", marginTop: "54px" }}
          />

          {/* Company Image */}
          <img
            src="/images/fonix.png"
            alt="Logo"
            className="img-fluid"
            style={{ float: 'right', marginRight: '30px', marginTop: '137px', width:"750px", height:"506px" }}
          />

<div className="p-3 p-md-5 text-center bg-image" style={{ marginTop: "50px", float: 'left' }}>
  <div className="mask" >
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h4 className="mb-3" style={{ color: '#1E3447', fontFamily: "Inter", fontWeight: "400", fontSize: "33px", lineHeight: "39.94px", textAlign:"left", marginLeft:"80px" }}>Welcome to</h4>

        <div className="mb-3" style={{ display: "flex", justifyContent: 'flex-end', alignItems: 'flex-end', textAlign:"left", marginLeft:"80px",  marginTop:"10px" }}>
          <h1 style={{ color: '#1E3447', fontFamily: "Inter", fontSize: "68px", lineHeight: "72px", fontWeight: "700", }}>FONIX</h1>
          <h1 style={{ color: '#EC2E25', fontFamily: "Inter", marginLeft: '10px', lineHeight: '72px', fontWeight: "700", fontSize: "68px" }}>Software</h1>
        </div>

        <h1 className="mb-3" style={{ color: '#EC2E25', fontFamily: "Inter", lineHeight: '72px', fontWeight: "700", fontSize: "68px", textAlign:"left", marginLeft:"80px",  marginTop:"-20px" }}>Solutions</h1>
        <br></br>
        <h1 className="mb-3" style={{ color: '#1E3447', fontFamily: "Inter", lineHeight: '72px', fontWeight: "700", fontSize: "68px", textAlign:"left", marginLeft:"80px",  marginTop:"-30px" }}>Pvt Ltd.</h1>

        <a
          data-mdb-ripple-init
          className="btn btn-outline-light btn-lg"
          href="#!"
          role="button"
          style={{ borderRadius: "40px", fontFamily: "Inter", fontWeight: "700", fontSize: "18px", lineHeight: "21.78px", float: "left", backgroundColor:"#EC2E25",marginLeft:"80px", marginTop:"20px" }}
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
