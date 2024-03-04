import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
  render() {
    return (
    <div style={{ position: "relative", height: "810px" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/images/bg.png')", rotate:"-0 deg", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}></div>
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

        {/* Content */}
        <div className="row">
          <div className="col">
            <div className="p-3 p-md-5 text-center bg-image" style={{ marginTop: "30px" }}>
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">

                    <div className='row'>
                      <div className='col'>
                        <h4 style={{ color: '#1E3447', fontFamily: "Inter", fontWeight: "400", fontSize: "33px", lineHeight: "39.94px", textAlign: "left", marginLeft: "85px" }}>Welcome to</h4>
                      </div>
                    </div>

                    <div className="row" style={{ textAlign: "left", marginLeft: "70px", marginTop: "10px" }}>
                      <div className='col'>
                        <h1 style={{ color: '#1E3447', fontFamily: "Inter", fontSize: "68px", lineHeight: "72px", fontWeight: "700" }}>FONIX</h1>
                      </div>

                      <div className='col'>
                        <h1 style={{ color: '#EC2E25', fontFamily: "Inter", marginLeft: '10px', lineHeight: '72px', fontWeight: "700", fontSize: "68px" }}>Software</h1>
                      </div>
                    </div>

                    <div className='col'>
                      <h1 className="mb-3" style={{ color: '#EC2E25', fontFamily: "Inter", lineHeight: '72px', fontWeight: "700", fontSize: "68px", textAlign: "left", marginLeft: "80px", marginTop: "10px" }}>Solutions</h1>
                    </div>

                    <div className='col'>
                      <h1 className="mb-3" style={{ color: '#1E3447', fontFamily: "Inter", lineHeight: '72px', fontWeight: "700", fontSize: "68px", textAlign: "left", marginLeft: "80px", marginTop: "10px" }}>Pvt Ltd.</h1>
                    </div>

                    <div className='col'>
                      <a
                        data-mdb-ripple-init
                        className="btn btn-outline-light btn-lg"
                        href="#!"
                        role="button"
                        style={{ borderRadius: "40px", fontFamily: "Inter", fontWeight: "700", fontSize: "18px", lineHeight: "21.78px", backgroundColor: "#EC2E25", marginLeft: "80px", float:"left" }}
                      >
                        Contact Us&nbsp;<i className="fas fa-headphones"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            {/* Company Image */}
            <img
              src="/images/fonix.png"
              alt="Logo"
              className="img-fluid company-image"
              style={{float:"right",  width:"auto", height:"auto" }}
            />
          </div>

        </div>
      </header>
    </div>
    );
  }
}

export default Header;
