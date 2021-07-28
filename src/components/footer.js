import React from "react";
import {Container, Row} from "reactstrap"

function Footer (){
    return(
        <div>
<Row>
    <h3 className="footname">Ben Abbott 2021</h3>
</Row>
<Row className="footicons">
<a href="https://www.linkedin.com/in/ben-abbott-51394421/"><i class="fab fa-linkedin fa-4x linkedin" ></i></a>
      
      <a href="https://github.com/benabbott85"><i class="fab fa-github fa-4x github"></i></a>
      <a href="mailto:babbott85@gmail.com" class="btn"><button id="emailbtnhome">Email Me</button></a>
</Row>

        </div>
    )
}

export default Footer