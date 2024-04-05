import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

import styles from "./savannah-hero-section.module.css";

import vuesaxboldmoon from '../../assets/img/vuesaxboldmoon.svg';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (




<Router>
<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
  <Container>
    <Navbar.Brand href="/">
    <button className={styles.logo}>
            <div className={styles.yellow} />
            <div className={styles.black} />
    </button>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">
      <span className="navbar-toggler-icon"></span>
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
        <Nav.Link href="#gallery" className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}>Gallery</Nav.Link>
        <Nav.Link href="#schedule" className={activeLink === 'schedule' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('schedule')}>Schedule</Nav.Link>
        <Nav.Link href="#about-me" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')}>About me</Nav.Link>
      </Nav>
      <span className="navbar-text">

        <button className={styles.switchMode}>
                <div className={styles.circle} />
                <img
                  className={styles.vuesaxboldmoonIcon}
                  alt=""
                  src={vuesaxboldmoon}
                />
              </button>
          <button className="vvd"><span>Contact Me</span></button>
      </span>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Router>

  )
}

