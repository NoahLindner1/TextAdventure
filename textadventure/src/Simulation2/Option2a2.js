import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a2_2 extends Component {
	render() {
		return (
			<div>
				<h1>You start drinking "high octane" energy drinks with lots of caffeine.</h1>
				<Link to="/Simulation2/Option2a2a">
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

export default Option2a2_2