import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import footerpic from '../../assets/img/wepikphotomode@2x.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <FooterTop />
          <Col size={12} sm={6}>
          <button className="logo">
            <div className="yellow" />
            <div className="black" />
    </button>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">

        
        <div className="footernav">
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#schedule">Schedule</a>
        <a href="#about-me">About me</a>
        </div>


            <p>Copyright © Savannah Star | all rights reserved</p>
          </Col>
        </Row>
      </Container>
      <hr/>
    </footer>
  )
}

export default Footer;



function FooterTop() {
  return (
    <div className="footertop">
      <Col lg={12}>
   
   <div className="newsletter-bx wow slideInUp">
    <div className="footertoprow">
    <img src={footerpic} />
    <span className="footerthanks">Thanks for visiting my website <br /> If you have any questions you can write me to any of my social networks, I am sure I will answer you.</span>
    </div>

   </div>
   
   </Col>
    </div>


  )
}