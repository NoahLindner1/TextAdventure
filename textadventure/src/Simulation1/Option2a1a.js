import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a1a extends Component {
	render() {
		return (
			<div>
				<h1>You have enough formula for a few days, but don’t have enough money for all the diapers you need.</h1>
				<Link to="/Simulation1">
				<button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                restart
                </button>
				</Link>
			</div>
		)
	}
}

export default Option2a1a