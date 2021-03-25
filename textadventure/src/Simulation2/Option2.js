import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2_2 extends Component {
	render() {
		return (
			<div>
				<h1>Take two part-time jobs from 6-8 am and 8 pm to midnight. You can sleep on Sunday, right?</h1>
				<Link to="/Simulation2/Option2a">
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

export default Option2_2