import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

 function Home(){

    return(
        

        
    <div>
        
 <Container fluid>

  <Row>
    <Col>
    <Navbar bg="dark" variant="dark">

      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Sparsh Patel
      </Navbar.Brand>
  </Navbar>
    
    </Col>
  </Row>



 </Container>








    <Container fluid>
  <Row>
    <Col>1 of 2</Col>
  </Row>
    </Container>








    </div>
        





    )


}

export default Home;