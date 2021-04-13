import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b2b_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">On your way to the pharmacy, your walker wheels catch on a big crack in the sidewalk and you fall, breaking your wrist. A kind stranger who sees you fall calls an ambulance.  Now you have extra doctor's appointments, an ambulance bill, and pain medications.</h1>
				<Link to="/Simulation3">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Restart
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2b2b_3