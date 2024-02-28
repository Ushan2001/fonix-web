import React, { Component } from 'react';

export default class DetailsBar extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-between">
        {/* First Card */}
        <div className="card mb-3 border-0" style={{ maxWidth: "400px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/images/cloud-computing 1.png" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#1E3447", fontFamily: "Inter", fontSize: "24px" }}>800K+ Downloads</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="card mb-3 border-0" style={{ maxWidth: "600px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/images/graduates 1.png" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#1E3447", fontFamily: "Inter", fontSize: "24px" }}>500K+ Registered Students</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="card mb-3 border-0" style={{ maxWidth: "380px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/images/Group.png" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#1E3447", fontFamily: "Inter", fontSize: "24px" }}>70K Daily Users</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
