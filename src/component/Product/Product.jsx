import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div className='container'>
         <center>
    <h4 className="mt-5" style={{ borderRadius: "40px", fontFamily: "Inter", fontWeight: "700", fontSize: "28px", lineHeight: "33.89px" }}><b>Award wining products</b></h4>
    </center>
    <div className='d-flex flex-wrap justify-content-center mt-3'>
   
    <div className='container mb-4' style={{ width: "600px",height: "530px", border: "2px solid #ccc", backgroundColor: "#FFF6F6", borderRadius:"16px", borderStyle:"dashed" , borderColor:"#EC2E25"}}>
    <h4 className="mt-4" style={{fontFamily:"Inter", color:"#1E3447"}}><b>Exam Hub</b></h4>
    <img className="profile-img img-fluid" src="/images/examhub.png" alt="Exam Hub" style={{ maxWidth: "100%", height: "auto", width: "550px", maxHeight: "400px" }} />
    <a href="1" class="btn btn-danger" style={{ borderRadius: "40px", fontFamily: "Inter", fontWeight: "700", fontSize: "15px", lineHeight: "21.78px", float: "right", padding:"11px, 22px, 11px, 32px" }}>Learn more&nbsp;<i class="fas fa-arrow-right"></i></a>
  
</div>

<div className='container mb-4' style={{ width: "600px", height: "530px", border: "2px solid #ccc", marginLeft: "5px", backgroundColor: "#FFF6F6", borderRadius:"16px", borderStyle:"dashed" , borderColor:"#EC2E25" }}>
<h4 className="mt-4" style={{fontFamily:"Inter", color:"#1E3447"}}><b>Coming soon!</b></h4>
<img className="profile-img img-fluid" src="/images/fedes.png" alt="..." style={{ maxWidth: "100%", height: "auto", width: "550px", maxHeight: "400px", marginTop:"50px" }} />
<a href="1" class="btn btn-danger" style={{ borderRadius: "40px", fontFamily: "Inter", fontWeight: "700", fontSize: "15px", lineHeight: "21.78px", float: "right", marginTop:"50px", padding:"11px, 22px, 11px, 32px" }}>Learn more&nbsp;<i class="fas fa-arrow-right"></i></a>

</div>
    </div>
      </div>
      
    )
  }
}
