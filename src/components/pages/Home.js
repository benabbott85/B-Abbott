import React from "react";
// import NavTabs from "./NavTabs"
import {Link} from "react-router-dom"
// import {CardImg, Container} from "reactstrap"

function Home() {
  return (
    <div className="background">
    <div>
      <h1 className="myname">Ben Abbott</h1>
      <br></br>
      <h2 className="fullstack">Full Stack Web Developer</h2>
    <br></br>
      <h3 className="denver"> Denver, Colorado</h3>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <h4 className="tutor">Senior Full Stack Web Development Tutor & Teaching Assistant</h4>
     <div className="icons">
     <a href="https://www.linkedin.com/in/ben-abbott-51394421/"><i class="fab fa-linkedin fa-4x linkedin" ></i></a>
      <br></br>
      <a href="https://github.com/benabbott85"><i class="fab fa-github fa-4x github"></i></a>
      <a href="mailto:babbott85@gmail.com" class="btn"><button id="emailbtnhome">Email Me</button></a>
      <br></br>
      </div>
      </div>
    <br></br>
<br></br>    
    <br></br>


    {/* <h4 className="tutor">Senior Full Stack Web Development Tutor &</h4>
    <br></br>
    <h5 className="ta">Teaching Assistant</h5>
    <br></br>
    <p className="tutor">for:</p> */}
   
   {/* <a href=""><img className="trillogo" src="https://photos.angel.co/startups/i/2784197-e6b31eeb437202f94e63c4ab4ca1b94f-medium_jpg.jpg?buster=1477923906" alt="trilogo"></img>  </a>    */}

    
    
    </div>

</div>


  );
}

export default Home;
