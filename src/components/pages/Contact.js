import React from "react";
import { Link, Route } from "react-router-dom";
// import Learn from "./Learn";
// import NavTabs from "./NavTabs"

function Contact(props) {
  return (
    <div className="background">
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        Tel: (516) 318-1366
        <br></br>

        Email: babbott85@gmail.com
        <a href="mailto:babbott85@gmail.com" class="btn"><button id="emailbtn">Email Me</button></a>
        <br></br>
        
        Github: benabbott85
        <br></br>
      </p>
     
    </div>
    </div>
  );
}

export default Contact;
