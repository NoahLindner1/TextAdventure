import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a1_2 extends Component {
	render() {
		return (
			<div>
				<h1>You tell the loan company about your trust fund--you'll be getting it in a year.</h1>
				<Link to="/Simulation2/Option1a1a">
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

export default Option1a1_2