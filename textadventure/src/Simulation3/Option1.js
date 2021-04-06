import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1_3 extends Component {
	render() {
		return (
			<div>
				<h1>Go to a local lending agency and take out a loan.</h1>
				<Link to="/Simulation2/Option1a">
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