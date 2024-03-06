import React, { Component } from 'react';
import "./details.css"

export default class DetailsBar extends Component {
  render() {
    return (
      <div className='container'>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-3 g-0"> {/* Removed g-0 for tighter spacing */}
            <div className="col mb-4">
              {/* First Card */}
              <div className="card border-0" style={{ maxWidth: "auto" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="/images/cloud-computing 1.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" id="detailsText1">
                      <h5 className="card-title"  style={{ color: "#1E3447", fontFamily: "Inter", fontSize: "24px", fontWeight: "600", lineHeight: "29.05px", marginLeft:"-70px" }}>800K+ Downloads</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              {/* Second Card */}
              <div className="card border-0" style={{ maxWidth: "auto" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="/images/graduates 1.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" id="detailsText2">
                      <h5 className="card-title" style={{ color: "#1E3447", fontFamily: "Inter", fontSize: "24px", fontWeight: "600", lineHeight: "29.05px", marginLeft:"-70px" }}>500K+ Registered Students</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              {/* Third Card */}
              <div className="card border-0" style={{ maxWidth: "auto" }}>
                <div className="row g-0">
                  <div className="col-md-3">
                    <img src="/images/Group.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body" id="detailsText3">
                      <h5 className="card-title" style={{ color: "#1E3447", fontFamily: "Inter", fontSize: "24px", fontWeight: "600", lineHeight: "29.05px", marginLeft:"-100px" }}>70K Daily Users</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
