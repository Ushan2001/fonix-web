import React from 'react';
import "./card.css";

export default function Service() {
  return (
    <div className='container'>
      <h2 className="mb-3" style={{ color: "black", marginTop: "20px" }}>Our Service</h2>

      <div className="card-container d-flex justify-content-between">
        
        {/* Digital Marketing */}
        <div className="card animated-card" style={{ width: "25rem", margin: "0.5rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: "Inter" }}><b><i className="fas fa-bullhorn"></i>&nbsp;Digital Marketing</b></h5>
            <p className="card-text">Elevate your brand with our cutting-edge digital marketing strategies, including social media, and PPC campaigns, to boost online presence.</p>
            <a href="1" className="btn btn-danger" style={{ borderRadius: "40px" }}>Inquire&nbsp;<i className="fas fa-arrow-right"></i></a>
          </div>
        </div>

        {/* Business Consulting */}
        <div className="card animated-card" style={{ width: "25rem", margin: "0.5rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: "Inter" }}><b><i className="fas fa-briefcase"></i>&nbsp;Business Consulting</b></h5>
            <p className="card-text">Transform your business with our expert consulting services, offering personalized strategies for growth, efficiency, and competitive advantage.</p>
            <a href="1" className="btn btn-danger" style={{ borderRadius: "40px" }}>Inquire&nbsp;<i className="fas fa-arrow-right"></i></a>
          </div>
        </div>

        {/* R&D */}
        <div className="card animated-card" style={{ width: "25rem", margin: "0.5rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: "Inter" }}><b><i className="fas fa-flask"></i>&nbsp;R&D</b></h5>
            <p className="card-text">Drive innovation with our Research and Development services, focusing on technological advancements and custom solutions to stay ahead in your industry.</p>
            <a href="1" className="btn btn-danger" style={{ borderRadius: "40px" }}>Inquire&nbsp;<i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
