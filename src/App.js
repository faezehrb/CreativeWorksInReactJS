import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Fragment } from 'react';
// import './scroll/scroll';
import './App.css';
import NightSky from '../src/appearance/NightSky';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import Soul1 from './souls/Soul1';
import Soul2 from './souls/Soul2';
import Soul3 from './souls/Soul3';
import Soul4 from './souls/Soul4';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 0.4, 
        effects: true
      });
      ScrollTrigger.create({
        start: 'bottom bottom',
        markers: true
      });
    },
    { scope: main }
  );
  return(
    <Container id='smooth-wrapper' ref={main} fluid>
      <NightSky />
      <div id='smooth-content'>
        <Row className='soulSection' id='firstSec'>
          <Col className='contSection'>
            <div className='soulCol'><Soul1/></div>
            <div className='contCol'>
              <h1>First</h1>
            </div>
          </Col>
        </Row>
        <Row className='soulSection' id='secondSec'>
          <Col className='contSection'>
            <div className='soulCol'><Soul2/></div>
            <div className='contCol' >
              <h1 >Second</h1>
            </div>
          </Col>
        </Row>
        <Row className='soulSection' id='thirdSec'>
          <Col className='contSection'>
            <div className='soulCol'><Soul3/></div>
            <div className='contCol'>
              <h1 >Third</h1>
            </div>
          </Col>
        </Row>
        <Row className='soulSection' id='forthSec'>
          <Col className='contSection'>
            <div className='soulCol'><Soul4/></div>
            <div className='contCol'>
              <h1 >Forth</h1>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default App;
