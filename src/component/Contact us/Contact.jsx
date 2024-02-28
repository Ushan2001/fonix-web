import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="container mt-5">
        {/* Contact Us text */}
        <div className="row">
          <div className="col-md-6">
            <div className="text">
              <h2 className="mb-3">Contact Us</h2>
              <h5>Need to get in touch with us? Either fill out the form with your <br/>
                inquiry or contact us using below contact details.</h5><br/>
            </div>

            <div className="row">
              <div className="col-md-4 mb-4">
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+94 77 050 8710</p>
              </div>

              <div className="col-md-4 mb-4">
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@fonixss.com</p>
              </div>

              <div className="col-md-4 mb-4">
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>263/A, Eththota, Gallalla, Ratnapura, LK</p>
              </div>
            </div>
          </div>

          {/* Contact Us Form */}
          <div className="col-md-6">
            <form id="contact-form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="form_name"><b>Firstname</b></label>
                  <input id="form_name" type="text" name="name" className="form-control" placeholder="Enter your firstname" required="required" />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="form_lastname"><b>Lastname</b></label>
                  <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Enter your lastname" required="required" />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="form_email"><b>Email</b></label>
                <input id="form_email" type="email" name="email" className="form-control" placeholder="Enter your email" required="required" />
              </div>

              <div className="mb-3">
                <label htmlFor="form_message"><b>How can we help you?</b></label>
                <textarea id="form_message" name="message" className="form-control" placeholder="Message for us" rows="4" required="required"></textarea>
              </div>

              <div className="text-center">
                <button type='submit' className="btn btn-danger" style={{ borderRadius: "40px" }}>Send <i className="fas fa-arrow-right"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
