import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b_2 extends Component {
	render() {
		return (
			<div>
				<h1>You have to use your car for collateral, and the loan requires you to pay $75 per month for 24 months. Now what do you do?</h1>
				<Link to="/Simulation2/Option1b1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You reluctantly turn the title over to the company--your car is theirs, too, until you pay off the loan.
                </button>
                </Link>
                <Link to="/Simulation2/Option1b2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You laugh at the crazy interest rates they want and decide you can sleep in your car and shower at the gym until winter. No loan for you!
                </button>
                </Link>
			</div>
		)
	}
}

export default Option1b_2