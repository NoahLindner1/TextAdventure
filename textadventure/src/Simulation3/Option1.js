import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1_3 extends Component {
	render() {
		return (
			<div>
				<h1>Stock up on foods from the $1 aisle at the grocery store so that you'll have enough money for all your medicine.</h1>
				<Link to="/Simulation3/Option1a">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Next
                </button>
                </Link>
			</div>
		)
	}
}

export default Option1_3