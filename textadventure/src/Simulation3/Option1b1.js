import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b1_3 extends Component {
	render() {
		return (
			<div>
				<h1>You reluctantly turn the title over to the company--your car is theirs, too, until you pay off the loan.</h1>
				<Link to="/Simulation2/Option1b1b">
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

export default Option1b1_3