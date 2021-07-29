import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

 function Home(){

    return(
        

        
    <div>
        
 <Container fluid>

  <Row>
    <Col>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
    </Container>
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