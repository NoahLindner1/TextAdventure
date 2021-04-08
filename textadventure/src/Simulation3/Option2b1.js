import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b1_3 extends Component {
	render() {
		return (
			<div>
				<h1>Starting over with the extra amount of medication means you need extra amounts of certain foods that help your body with the side effects of the medication. You had budgeted your SNAP card for the month, but decide to use it up early. </h1>
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

export default Option2b1_3