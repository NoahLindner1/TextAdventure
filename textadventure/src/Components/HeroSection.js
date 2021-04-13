import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from "react-router-dom";
import { FactButton } from './FactButton.js';
import shoes from '../assets/walking-shoes.gif'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/homeless-walking.mp4" autoPlay loop muted />
      {/* <img src={shoes} alt="walking shoes" autoPlay loop muted/> */}
      <h1>Step into my shoes</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <a href='/poverty-facts' role="button" className="btn btn-secondary btn-lg">Learn More</a>
        {/* <button type="button" className="btn btn-outline-secondary btn-lg">
          Learn More
        </button> */}
        <Link>

          {/* <FactButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Learn More
        </FactButton>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Start a Simulation <i className='far fa-play-circle' />
        </Button> */}
          {/* <button type="button" className="btn btn-secondary btn-lg">
          Start a Simulation
        </button> */}
        </Link>
        <a href='/simulations' role="button" className="btn btn-secondary btn-lg">Start a Simulation</a>
      </div>
    </div>
  );
}

export default HeroSection;