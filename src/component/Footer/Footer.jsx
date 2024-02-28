import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div >
        <footer className="text-center bg-body-tertiary" >

          {/* Grid container */}
          <div className="container pt-4">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <a
                data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-facebook-f"></i
              ></a>

              {/* Twitter */}
              <a
                data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-twitter"></i
              ></a>

              {/* Instagram */}
              <a
                data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-instagram"></i
              ></a>

              {/* Linkedin */}
              <a
                data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-linkedin"></i
              ></a>

             {/* YouTube */}
                <a
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating btn-lg text-body m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                >
                        <i className="fab fa-youtube"></i>
                </a>

            </section>

            {/* Section: Social media */}
          </div>
          {/* Grid container */}

          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          ©2024 FONIX, All right reserved
          </div>
          {/* Copyright */}
        </footer>
      </div>
    );
  }
}
