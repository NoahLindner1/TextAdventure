import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a2a extends Component {
	render() {
		return (
			<div>
				<h1>The store owner cheats the next WIC customer who comes in, and you have to haul the baby, the stroller, diaper bag, and purse on the bus to the discount grocery store and then spend some of your limited funds on full-price cans of formula.</h1>

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

export default Option1a2a