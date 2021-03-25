import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b1_2 extends Component {
	render() {
		return (
			<div>
				<h1>You keep working the two jobs, but you take lots of vitamins with the 8 cups of coffee you drink every day.</h1>
				<Link to="/Simulation2/Option2b1b">
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

export default Option2b1_2