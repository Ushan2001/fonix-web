import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const backgroundImageStyle = {
    // specify the URL of your background image
      backgroundImage: 'url("/images/footer.png")',
      // set background size to cover the entire container
      backgroundSize: 'cover',
      // set background position to center
      backgroundPosition: 'center',
      
    };

    return (
      <div>
        <footer className="text-center bg-body-tertiary" style={backgroundImageStyle}>
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
              ><img
              src="/images/scoial/facebook.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: '44px', maxHeight: '44px' }}
            /></a>

              {/* Twitter */}
              <a
                data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><img
              src="/images/scoial/twitter.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: '44px', maxHeight: '44px' }}
            /></a>

              {/* Instagram */}
              <a
                data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><img
              src="/images/scoial/instagram.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: '44px', maxHeight: '44px' }}
            /></a>

             {/* YouTube */}
                <a
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating btn-lg text-body m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                >
                        <img
              src="/images/scoial/youtube.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: '44px', maxHeight: '44px' }}
            />
                </a>

            </section>

            {/* Section: Social media */}
          </div>
          {/* Grid container */}

          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', fontFamily: "Inter", fontWeight: "500", fontSize: "18px", lineHeight: "21.78px"}}>
          ©2024 FONIX, All right reserved
          </div>
          {/* Copyright */}
        </footer>
      </div>
    );
  }
}
