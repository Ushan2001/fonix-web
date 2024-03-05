import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="container mt-5">
        {/* Contact Us text */}
        <div className="row">
          <div className="col-md-6">
            <div className="text">
              <h2 className="mb-3" style={{fontFamily:"Inter", fontWeight:"700", fontSize:"28px", lineHeight:"33.89px"}}>Contact Us</h2>
              <h5 style={{fontFamily:"Inter", fontWeight:"400", fontSize:"20px", lineHeight:"31px", color:"#00000099"}}>Need to get in touch with us? Either fill out the form with your <br/>
                inquiry or contact us using below contact details.</h5><br/>
            </div>

            <div className="d-flex row">
  <div className="col-md-4 mb-4 flex-grow-1">
    <h5 className="card-title" style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "18px", lineHeight: "24.2px" }}>
      <b><img
        src="/images/contact/phone.png"
        alt="Logo"
        className="img-fluid"
        style={{ maxWidth: '47px', maxHeight: '47px' }}
      />&nbsp;&nbsp;+94 77 050 8710</b>
    </h5>
  </div>

  <div className="col-md-4 mb-4 flex-grow-1">
    <h5 className="card-title" style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "18px", lineHeight: "24.2px" }}>
      <b><img
        src="/images/contact/mail.png"
        alt="Logo"
        className="img-fluid"
        style={{ maxWidth: '47px', maxHeight: '47px' }}
      />&nbsp;&nbsp;contact@fonixss.com</b>
    </h5>
  </div>
</div>


<div className="d-flex row" style={{marginTop:"25px"}}>
  <div className="col-md-4 mb-4 flex-grow-1">
    <h5 className="card-title " style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "18px", lineHeight: "24.2px" }}>
      <b><img
        src="/images/contact/address.png"
        alt="Logo"
        className="img-fluid"
        style={{ maxWidth: '47px', maxHeight: '47px' }}
      />&nbsp;&nbsp;263/A, Eththota, Gallalla, Ratnapura, LK</b>
    </h5>
  </div>
</div>

          </div>
{/*form */}

          <div className="col-md-6">
  <form id="contact-form" action="mailto:example@gmail.com" method="post" encType="text/plain">
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="form_name"><b>Firstname</b></label>
        <input id="form_name" type="text" name="name" className="form-control" placeholder="Enter your firstname" required="required" style={{ borderRadius: "16px", marginTop: "10px" }} />
      </div>

      <div className="col-md-6 mb-3">
        <label htmlFor="form_lastname"><b>Lastname</b></label>
        <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Enter your lastname" required="required" style={{ borderRadius: "16px", marginTop: "10px" }} />
      </div>
    </div>

    <div className="mb-3">
      <label htmlFor="form_email"><b>Email</b></label>
      <input id="form_email" type="email" name="email" className="form-control" placeholder="Enter your email" required="required" style={{ borderRadius: "16px", marginTop: "10px" }} />
    </div>

    <div className="mb-3">
      <label htmlFor="form_message"><b>How can we help you?</b></label>
      <textarea id="form_message" name="message" className="form-control" placeholder="Message for us" rows="4" required="required" style={{ borderRadius: "16px", marginTop: "10px" }}></textarea>
    </div>

    <div className="text-center">
      <button type='submit' className="btn btn-danger" style={{ borderRadius: "40px", fontFamily: "Inter", fontWeight: "700", fontSize: "15px", lineHeight: "21.78px", float: "right" }}>Send <i className="fas fa-arrow-right"></i></button>
    </div>
  </form>
</div>
</div>
</div>

    );
  }
}
