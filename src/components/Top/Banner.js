import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/escultures@2x.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import styles from "./savannah-hero-section.module.css";

import vuesaxboldmoon from '../../assets/img/vuesaxboldmoon.svg';


import portal from '../../assets/img/portal.svg';
import escultures from '../../assets/img/escultures@2x.png';



const twittersvg =         
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"/>
    <path d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z" 
    fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>;


const instasvg =
<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>


const tiktoksvg = 
<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>

const ofsvg = 
<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>

const fbsvg = 
<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>



export const Banner = () => {


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            
            <div className={styles.stardiv}>
            <h1 className={styles.savannah}>SAVANNAH </h1>
            <img className="star" src={portal} />
            </div>
            
            <h2 className={styles.star}>STAR</h2>
            <h3 className={styles.gfe}>GFE</h3>



            <div className={styles.socialsParent}>

              <div className={styles.socials}>

              <SocialBox 
    link={"https://www.instagram.com/savannahstarx/"}
    icon = {instasvg}
    />
    <SocialBox 
    link={"https://twitter.com/Savannahstar_xx"}
    icon = {twittersvg}
    />
    <SocialBox 
    link={"https:/www.tiktok.com/@savannah_star_"}
    icon= {tiktoksvg}
    />
    <SocialBox 
    link={"https://facebook.com/savannahstarxx"}
    icon= {fbsvg}
    />
    <SocialBox 
    link={"https://onlyfans.com/savannahstarxx"}
    icon= {ofsvg}
    />

              </div>
              </div>


              <button className={styles.gfButton}>
                <div className={styles.makeMeYour}>Make me your Girlfriend <ArrowRightCircle size={25} /></div>
              </button>

          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="banner-img" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>



      </Container>
    </section>
  )
}



function SocialBox({icon, link}) {
  return (
  <a target="_blank" href={link}>
    <div className={styles.telegram}>
      <div className={styles.telegramIcon}>
        {icon}
      </div>
  {/* <img
    className={styles.telegramIcon}
    alt=""
    src={icon}
  /> */}
</div>
</a>
  )
}