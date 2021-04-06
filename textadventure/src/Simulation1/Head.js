import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Head.css";
import subway from '../assets/subway.jpeg'

export class Head extends Component {
	render() {
		return (
			<div className="headBody">
				<p className="userStory1">You are a 30-year-old African-American woman whose husband was a victim of a hit-and-run. He is waiting to get on disability from his permanent injuries. You have an adorable 6-week-old baby boy. You were working full-time at a convenience store, but they don’t have maternity leave and you are really strapped for cash and food from the time you weren’t working. You have a SNAP card and visit the local corner store that’s WIC-certified to purchase 10 cans of WIC formula for your new baby. Your card authorizes 10 cans, but the store owner tells you it’s only good for 2 cans. You have no car and rely on this neighborhood store for its location and WIC supplies.</p>
				 
				
				<div className="choice1">
				 <p className="p1">You try again to talk with the store owner--this is illegal, but you don’t want to get him in trouble</p>
                <Link to="/Simulation1/Option1">
                <button
				type="button"
                class='btn2 btn-light'
                >
				Choice one
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">You immediately report this store to the state.</p>
                <Link to="/Simulation1/Option2">
                <button
				type="button"
                class='btn2 btn-light'
                >
                Choice two
                </button>
                </Link>
				</div>
            </div>
		);
	}
}

export default Head