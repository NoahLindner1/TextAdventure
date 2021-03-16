import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b1 extends Component {
	render() {
		return (
			<div>
				<h1>You ask for store credit since the store profits, anyway.</h1>
				<Link to="/Simulation1/Option1b1b">
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

export default Option1b1