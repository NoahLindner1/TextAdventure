import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a1a_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You become anemic and faint, so your neighbor calls an ambulance. Now you have an ambulance bill AND yet another follow-up doctor's visit. </h1>
				<Link to="/Simulation2">
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

export default Option2a1a_3