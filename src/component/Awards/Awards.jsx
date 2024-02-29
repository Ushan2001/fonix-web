import React, { Component } from 'react';
import "./style.css";

export default class Awards extends Component {
  componentDidMount() {
    // Auto-scrolling logic
    this.startAutoScroll();
  }

  componentWillUnmount() {
    // Stop auto-scrolling when the component unmounts
    this.stopAutoScroll();
  }

  startAutoScroll = () => {
    this.scrollInterval = setInterval(() => {
      const { scrollContainer } = this;

      // Check if we have reached the end of the content
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        // Reset to the beginning
        scrollContainer.scrollLeft = 0;
      } else {
        // Scroll to the right
        scrollContainer.scrollLeft += 4; // Adjust the scrolling speed as needed
      }
    }, 50); // Adjust the interval as needed
  };

  stopAutoScroll = () => {
    clearInterval(this.scrollInterval);
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <center>
            <h4 className="mt-5" style={{fontFamily:"Inter", fontWeight:"700", fontSize:"28px", lineHeight:"33.89px"}}>Recognitions, Awards, and Accolades at Our Company</h4>
          </center>

          <div
            className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2"
            ref={(ref) => (this.scrollContainer = ref)} // Ref to the scrolling container
            style={{ overflowX: 'hidden' }}  // Hide the horizontal scrollbar
          >
             {/*NBQSA Best Startup Gold Award 2023*/}
             <div className="col-5" style={{width:"300px"}}>
                <img className="profile-img" src="/images/awards/NBQSA Best Startup Gold Award 2023.png" alt="..." style={{width:"230px", height:"280px"}}/>
                <center>
                    <p><b>NBQSA Best Startup <br/>
                      Gold Award 2023</b></p>
                    </center>
			     </div>

        {/*SLASSCOM Best Startup 2023*/}
        <div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/SLASSCOM Best Startup 2023.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>SLASSCOM Best Startup <br/>
                  2023</b></p>  
                    </center>
			</div>

            {/*NBQSA Silver Award 2023*/}
            <div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/NBQSA Silver Award 2023.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>NBQSA Silver Award <br/>
                  2023</b></p>
                    </center>
			</div>

			
            {/* SLASSCOM Best Startup 2022*/}
			<div className="col-5" style={{width:"300px"}} >
                <img className="profile-img-awards" src="/images/awards/SLASSCOM Best Startup 2022.png" alt="..." style={{width:"230px", height:"280px"}}/>
                <center>
                <p><b>SLASSCOM Best Startup <br/>
                  2022</b></p>
                </center>
			</div>

             {/*NBQSA Education Category Silver Award 2022*/}
			<div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/NBQSA Education Category Silver Award 2022.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>NBQSA Education Category <br/>
                  Silver Award 2022</b></p>
                    </center>
			</div>

             {/*CSSL Emerging ICT Leader of the Year 2022*/}
             <div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/CSSL Emerging ICT Leader of the Year 2022.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>CSSL Emerging ICT Leader <br/>
                  of the Year 2022</b></p>
                    </center>
			</div>

             {/*SLASSCOM Best Disruptive Product Innovation 2022*/}
             <div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/SLASSCOM Best Disruptive Product Innovation 2022.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>SLASSCOM Best Disruptive <br/>
                  Product Innovation 2022</b></p>
                    </center>
			</div>

              {/*SLASSCOM Best Client Delivery Innovation 2022*/}
              <div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/SLASSCOM Best Client Delivery Innovation 2022.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>SLASSCOM Best Client Delivery<br/> 
                  Innovation 2022</b></p>
                    </center>
			</div>

       {/*SLASSCOM Best UN17 SDG initiative National Award 2022*/}
            <div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/SLASSCOM Best UN17 SDG initiative National Award 2022.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>SLASSCOM Best UN17 SDG <br/>
                  initiative National Award <br/>
                  2022</b></p>
                    </center>
			</div>

              {/* SLASSCOM Best Startup 2021*/}
			<div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/SLASSCOM Best Startup 2021.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>SLASSCOM Best Startup <br/>
                  2021</b></p>
                </center>
			</div>

           
			 {/*CSSL Social Innovator of the Year 2021*/}
             <div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/CSSL Social Innovator of the Year 2021.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>CSSL Social Innovator <br/>
                  of the Year 2021</b></p>
                    </center>
			</div>

           

            {/*SLASSCOM Best Disruptor Award 2021*/}
            <div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/SLASSCOM Best Disruptor Award 2021.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>SLASSCOM Best Disruptor <br/>
                  Award 2021</b></p>
                    </center>
			</div>

            

            {/*e-Swarhimani Merit Award 2021*/}
            <div className="col-5" style={{width:"300px"}}>
            <img className="profile-img-awards" src="/images/awards/e-Swarhimani Merit Award 2021.png" alt="..." style={{width:"230px", height:"280px"}}/>
            <center>
                <p><b>e-Swarhimani Merit <br/>
                  Award 2021</b></p>
                    </center>
			</div>
          </div>
        </div>
      </div>
    );
  }
}
