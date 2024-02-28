import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div className='container'>
         <center>
    <h4 className="mt-5"><b>Award wining products</b></h4>
    </center>
    <div className='d-flex flex-wrap justify-content-center mt-3'>
   
    <div className='container mb-4' style={{ width: "600px",height: "570px", border: "2px solid #ccc", backgroundColor: "#FFF6F6", borderRadius:"16px"}}>
    <h4 className="mt-4" style={{fontFamily:"Inter", color:"#1E3447"}}><b>Exam Hub</b></h4>
    <img className="profile-img img-fluid" src="/images/examhub.png" alt="Exam Hub" style={{ maxWidth: "100%", height: "auto", width: "550px", maxHeight: "400px" }} />
    <a href="1" class="btn btn-danger" style={{ borderRadius: "40px"}}>Learn more&nbsp;<i class="fas fa-arrow-right"></i></a>
  
</div>

<div className='container mb-4' style={{ width: "600px", height: "570px", border: "2px solid #ccc", marginLeft: "5px", backgroundColor: "#FFF6F6", borderRadius:"16px" }}>
<h4 className="mt-4" style={{fontFamily:"Inter", color:"#1E3447"}}><b>Coming soon!</b></h4>
<img className="profile-img img-fluid" src="/images/fedes.png" alt="..." style={{ maxWidth: "100%", height: "auto", width: "550px", maxHeight: "400px" }} />
<a href="1" class="btn btn-danger" style={{ borderRadius: "40px" , marginTop:"95px" }}>Learn more&nbsp;<i class="fas fa-arrow-right"></i></a>

</div>
    </div>
      </div>
      
    )
  }
}
