import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import {Link} from "react-router-dom";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Step into my shoes</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Link to="/Simulation1">
        <button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Learn More
        </button>
      </Link>
      <Link to='/simulations'>
        <button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Start a Simulation <i className='far fa-play-circle' />
        </button>
      </Link>
      </div>
    </div>
  );
}

export default HeroSection;