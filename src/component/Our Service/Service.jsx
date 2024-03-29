import React from 'react';
import './card.css';

export default function Service() {
  return (
    <div className='container'>
    <div className='container-fluid mx-auto'>
      <h2 className='mb-3' style={{ color: 'black', marginTop: '20px', fontWeight: '700', fontSize: '28px', lineHeight: '33.89px' }}>Our Service</h2>

      <div className='row'>
        <div className='col-md-4'>
          {/* Digital Marketing */}
          <div className='card animated-card' style={{ margin: '0.5rem' }}>
            <div className='card-body d-flex flex-column'>
            <h5 className="card-title" style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "22px", lineHeight: "26.63px" }}>
      <b><img
            src="/images/service/digital.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: '52px', maxHeight: '52px' }}
          />&nbsp;&nbsp;&nbsp;Digital Marketing</b>
    </h5>
    <p className="card-text" style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "18px", lineHeight: "26px" , color:"#00000099" }}>
      Elevate your brand with our cutting-edge digital marketing strategies, including social media, and PPC campaigns, to boost online presence.
    </p>
    <div className="mt-auto">
      <a href="1" className="btn btn-danger" style={{ borderRadius: "40px", fontFamily: "Inter", fontWeight: "700", fontSize: "15px", lineHeight: "21.78px", float: "right" }}>
        Inquire&nbsp;<i className="fas fa-arrow-right"></i>
      </a>
    </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          {/* Business Consulting */}
          <div className='card animated-card' style={{ margin: '0.5rem' }}>
            <div className='card-body d-flex flex-column'>
            <h5 className="card-title" style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "22px", lineHeight: "26.63px" }}>
      <b><img
            src="/images/service/business.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: '52px', maxHeight: '52px' }}
          />&nbsp;&nbsp;&nbsp;Business Consulting</b>
    </h5>
    <p className="card-text" style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "18px", lineHeight: "26px" , color:"#00000099" }}>
      Transform your business with our expert consulting services, offering personalized strategies for growth, efficiency, and competitive advantage.
    </p>
    <div className="mt-auto">
      <a href="1" className="btn btn-danger" style={{ borderRadius: "40px", fontFamily: "Inter", fontWeight: "700", fontSize: "15px", lineHeight: "21.78px", float: "right" }}>
        Inquire&nbsp;<i className="fas fa-arrow-right"></i>
      </a>
    </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          {/* R&D */}
          <div className='card animated-card' style={{ margin: '0.5rem' }}>
            <div className='card-body d-flex flex-column'>
            <h5 className="card-title" style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "22px", lineHeight: "26.63px" }}>
      <b><img
            src="/images/service/r&d.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: '52px', maxHeight: '52px' }}
          />&nbsp;&nbsp;&nbsp;R&D</b>
    </h5>
    <p className="card-text" style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "18px", lineHeight: "26px", color:"#00000099" }}>
      Drive innovation with our Research and Development services, focusing on technological advancements and custom solutions to stay ahead in your industry.
    </p>
    <div className="mt-auto">
      <a href="1" className="btn btn-danger" style={{ borderRadius: "40px", fontFamily: "Inter", fontWeight: "700", fontSize: "15px", lineHeight: "21.78px", float: "right" }}>
        Inquire&nbsp;<i className="fas fa-arrow-right"></i>
      </a>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
