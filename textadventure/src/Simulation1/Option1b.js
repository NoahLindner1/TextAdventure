import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b extends Component {
	render() {
		return (
			<div>
				<h1>The store owner apologizes, but it’s too late because the card already deducted the full amount. What should you do next?</h1>
				<Link to="/Simulation1/Option1b1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You ask for store credit since the store profits, anyway.
                </button>
                </Link>
                <Link to="/Simulation1/Option1b2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You threaten to call state administrators.
                </button>
                </Link>
			</div>
		)
	}
}

export default Option1b