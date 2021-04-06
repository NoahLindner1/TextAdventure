import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a.css"

export class Option1b_2 extends Component {
	render() {
		return (
			<div className="Option1AHead">
				<h1 className="head">You have to use your car for collateral, and the loan requires you to pay $75 per month for 24 months. Now what do you do?</h1>

				<div className="A1buttons">

				<div className="p3Choice">
				<p className="p3">You reluctantly turn the title over to the company--your car is theirs, too, until you pay off the loan.</p>
				<Link to="/Simulation2/Option1b1">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice one
                </button>
                </Link>
				</div>

				<div className = "p4Choice">
					<p className="p4">You laugh at the crazy interest rates they want and decide you can sleep in your car and shower at the gym until winter. No loan for you!</p>
                <Link to="/Simulation2/Option1b2">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice two
                </button>
                </Link>
				</div>
				</div>
			</div>
		)
	}
}

export default Option1b_2