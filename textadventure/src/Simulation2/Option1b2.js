import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b2_2 extends Component {
	render() {
		return (
			<div>
				<h1>You laugh at the crazy interest rates they want and decide you can sleep in your car and shower at the gym until winter. No loan for you!</h1>
				<Link to="/Simulation2/Option1b2b">
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

export default Option1b2_2