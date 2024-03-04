import React, { Component } from 'react';
import "./style.css";

export default class Company extends Component {
  render() {
    return (
    <div className="container text-center">

      <div className="row">

        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
          {/* slasscom */}
          <div className="card-body d-flex flex-column">
            <div className='image-container' style={{ padding: '15px' }}>
              <img className="profile-img img-fluid" src="/images/company/slasscom-removebg-preview.png" alt="..." />
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
          {/* royaa jpg */}
          <div className="card-body d-flex flex-column">
            <div className='image-container' style={{ padding: '15px' }}>
              <img className="profile-img img-fluid" src="/images/company/royaa jpg.jpg" alt="..." />
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
          {/* ideamrt */}
          <div className="card-body d-flex flex-column">
            <div className='image-container' style={{ padding: '15px' }}>
              <img className="profile-img img-fluid" src="/images/company/ideamrt.png" alt="..." />
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
          {/* examhu */}
          <div className="card-body d-flex flex-column">
            <div className='image-container' style={{ padding: '15px' }}>
              <img className="profile-img img-fluid" src="/images/company/examhu.png" alt="..." />
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
          {/* dialog */}
          <div className="card-body d-flex flex-column">
            <div className='image-container' style={{ padding: '15px' }}>
              <img className="profile-img img-fluid" src="/images/company/dialog.jpeg" alt="..." />
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
          {/* coursehub name only */}
          <div className="card-body d-flex flex-column">
            <div className='image-container' style={{ padding: '15px' }}>
              <img className="profile-img img-fluid" src="/images/company/coursehub name only.png" alt="..." />
            </div>
          </div>
        </div>

      </div>
    </div>
    );
  }
}
