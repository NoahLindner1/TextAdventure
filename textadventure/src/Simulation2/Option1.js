import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './Option1.css'

export class Option1_2 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">Go to a local lending agency and take out a loan. </h1>
             	<div className="choice1">
				 <p className="p1">The loan company turns you down because your credit score is too high. Now what do you do?</p>
                <Link to="/Simulation2/Option1a">
                <button
				type="button"
                class='btn2 btn-light'
                >
				Choice one
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">You have to use your car for collateral, and the loan requires you to pay $75 per month for 24 months. Now what do you do?</p>
                <Link to="/Simulation2/Option1b">
                <button
				type="button"
                class='btn2 btn-light'
                >
                Choice two
                </button>
                </Link>
				</div>
			</div>
		)
	}
}

export default Option1_2