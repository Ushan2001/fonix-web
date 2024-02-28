import React, { Component } from 'react';
import "./style.css";

export default class Company extends Component {
  render() {
    return (
    <div>
      <div className="container-fluid">
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">

          {/*slasscom*/}
          <div className="col-5" style={{ width: "230px" }}>
            <div className="image-container">
              <img className="profile-img" src="/images/company/slasscom.png" alt="..." />
            </div>
          </div>

          {/*royaa jpg*/}
          <div className="col-5" style={{ width: "230px" }}>
            <div className="image-container">
              <img className="profile-img" src="/images/company/royaa jpg.jpg" alt="..." />
            </div>
          </div>

          {/*ideamrt*/}
          <div className="col-5" style={{ width: "230px" }}>
            <div className="image-container">
              <img className="profile-img" src="/images/company/ideamrt.png" alt="..." />
            </div>
          </div>

          {/*examhu*/}
          <div className="col-5" style={{ width: "230px" }}>
            <div className="image-container">
              <img className="profile-img" src="/images/company/examhu.png" alt="..." />
            </div>
          </div>

          {/*dialog*/}
          <div className="col-5" style={{ width: "230px" }}>
            <div className="image-container">
              <img className="profile-img" src="/images/company/dialog.jpeg" alt="..." />
            </div>
          </div>

          {/*coursehub name only*/}
          <div className="col-5" style={{ width: "230px" }}>
            <div className="image-container">
              <img className="profile-img" src="/images/company/coursehub name only.png" alt="..." />
            </div>
          </div>

        </div>
      </div>
    </div>
    )
  }
}
