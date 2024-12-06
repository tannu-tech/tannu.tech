import React  from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="video-container">
          {/* Background Video */}
          <video autoPlay loop muted className="background-video">
            <source src="vid.mp4" type="video/mp4" />
        
          </video>
    
          {/* Overlay Content */}
          <div className="overlay">
            <div className="left">
              <h1 className="contacth2">Tannu.Tech <br /> Making Internet Awesome!</h1>
              <p>
                {/* Let us know how we can assist you. Share your thoughts or inquiries
                with us. */}
              </p>
            </div>
          
          </div>
        </div>
      );
    };
  export default Contact
  