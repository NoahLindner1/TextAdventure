import React from 'react';
import "./ProfileCard.css"


const ProfileCard = props => {
    return(
        <div className='card text-center'>
            <div className='overflow'>
                <img src= {props.imgsrc} className='card-img-top'/>
            </div>
            {/* <img src= {props.imgsrc} class="card-img-top"/> */}
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>
                    {props.description}
                </p>
                <a href={props.route} className='btn btn-outline-success'>
                    Simulate
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;