import React from "react";
// import  "../../style.css";
import { Row, Container, Card, Col } from "reactstrap";
// import "../../style.css";

function Technologies() {
  return (
    <div className="background">
    <Container className='techcontainer'>
      <Row>
  <h1 className='techhead'>Below is a list of the different technologies I have used.</h1>
  </Row>
  <br></br>
  <br></br>
    <Row>
 <Card>
   <Col md={3}>
<div className="tech1">

            <img className="techimg1" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012011/stocklogos-template-01.png?itok=DapYF29D" alt="html"></img>
           
</div>
</Col>
</Card>

<Card>
  <Col md={3}>
<div className="tech1">
  
  <img className="techimg2" src="https://www.w3schools.com/whatis/img_css.jpg" alt="css"></img>
  
</div>
</Col>
</Card>
 
<Card>
  <Col md={3}>
<div className="tech1">
  
  <img className="techimg3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtxdAFUa1PtSnn2Rc04H9sAgwVMOvpDgM3koBo9--68F-V5Qd7&usqp=CAU" alt="JS"></img>
  
</div>
</Col>
</Card>

<Card>
  <Col md={3}>
<div className="tech1">
  
  <img className="techimg4" src="https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png" alt="Jquery"></img>
  
</div>
</Col>
</Card>
  </Row>
  <br></br>
  <Row>
  <Card>
    <Col md ={3}>
<div className="tech1">
  
  <img className="techimg5" src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png" alt="node"></img>
  
</div>
</Col>
</Card>

<Card>
  <Col md={3}>
<div className="tech1">
  
  <img className="techimg6" src="https://miro.medium.com/proxy/1*XP-mZOrIqX7OsFInN2ngRQ.png" alt="express"></img>
  
</div>
</Col>
</Card>

<Card>
  <Col md={3}>
<div className="tech1">
  
  <img className="techimg7" src="https://pngimg.com/uploads/mysql/mysql_PNG22.png" alt="mysql"></img>
  
</div>
</Col>
</Card>

<Card>
  <Col md={3}>
<div className="tech1">
  
  <img className="techimg8" src="https://cdn.iconscout.com/icon/free/png-256/sequelize-1-1175002.png" alt="sequelize"></img>
  
</div>
</Col>
</Card>
  </Row>
  <br></br>
  <Row>
    <Card className="empty">
      <Col md={2}></Col>
    </Card>

    <Card>
      <Col md={3}>
<div className="tech1">
<img className="techimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnCo7ZGhvQ6F8Li-sPX2D2c18TvfuuGKNmkQ&usqp=CAU" alt="api"></img>

</div>
</Col>
    </Card>
    
    <Card>
      <Col md={3}>
<div className="tech1">
  
  <img className="mongo" src="https://banner2.cleanpng.com/20180702/bgt/kisspng-mongodb-database-nosql-postgresql-mongo-5b39f9e3445fa6.5652746415305261792801.jpg" alt="mongodb"></img>
  
</div>
</Col>
</Card>
<Card>
  <Col md={3}>
<div className="tech1">
  
  <img className="techimgreact" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react"></img>
  
</div>
</Col>
</Card>

<Card>

</Card>
  </Row>
  
  </Container>
  </div>
  );
}

export default Technologies;
