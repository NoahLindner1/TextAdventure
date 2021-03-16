import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import  { FactButton } from './FactButton.js';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Step into my shoes</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <FactButton
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
          onClick={console.log('hey')}
        >
          Start a Simulation <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;