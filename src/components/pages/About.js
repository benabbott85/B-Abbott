import React from "react";
import me from "../../assets/Ben Abbott_03 (1).jpg";



function About() {
  return (
  
    <div>
      <h1>About Me</h1>
      <div class="aboutme">
        <div>
          <img className="me" src={me} alt="me"></img>
        </div>
        
      <p> I was born in New York City on May 13, 1988, and yes that was Friday the 13th. I am the second of two boys,
              my
              older brother is Zach.
              My father was a practicing labor lawyer for over 40 years working mostly with unions. My mom was a stay
              at home mom and also
              a choreographer on the side.
              I grew up in a small town, Point Lookout, on the south shore of Long Island about an hour east of the city.
          </p>
  
          <p> After high school, I left New York to attend the University of Colorado at Boulder. I studied communication
              and
              graduated in 2010 with a
              Bachelor of Arts. Following college, I moved to Park City, Utah to enjoy a year as a ski bum.
          </p>
  
          <p> After my ski bum year ended, I moved back to New York and settled in Williamsburg, a section of Brooklyn. I
              worked in New York City doing benefits
              administration for collectively bargained union health and pension funds. It was while I was doing this work that I first started
              to think about working in technology. A colleague tried to convince me that it was a good idea but I was initially hesistant. Things
              can change it seems like.
          </p>
  
          <p> I first started to think about web development as my future while at my previous job. They run a coding boot camp of their own
            and the more I started to think about it, the more it made sense to make a change. I have always had a love of technology
            and how it continues to evolve. I enrolled in the full stack web development certificate program at the University of Denver and 
            that is where my passion for coding truly grew. 
          </p>
          <p>
            Since finishing the program at the University of Denver, I have been tutoring students currently taking the same bootcamp all across the country.
            In addition, I am a teaching assistant for the web development bootcamp working with students in this capacity as well. 
          </p>

      </div>
    </div>
    
  );
}

export default About;
