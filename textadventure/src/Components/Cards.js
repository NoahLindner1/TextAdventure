import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Explore the inner city'
              label='Adventure'
              
            />
            <CardItem
              src='images/img-2.jpg'
              text='Live on a minimum wage salary'
              label='Experience'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Ride through a rough side of town'
              label='Mystery'
              
            />
            <CardItem
              src='images/img-6.jpg'
              text='Explore the Welfare System'
              label='Adventure'
              
            />
            <CardItem
              src='images/img-5.jpg'
              text='Ride on the CTA'
              label='Adrenaline'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;