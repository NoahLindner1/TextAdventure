import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a_2 extends Component {
	render() {
		return (
			<div className="Option1AHead">
				<h1 className="head">The loan company turns you down because your credit score is too high. Now what do you do?</h1>

				<div className="A1Buttons">

				<div className="p3Choice">
				<p className="p3">You tell the loan company about your trust fund--you'll be getting it in a year.</p>
				<Link to="/Simulation2/Option1a1">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice 1
                </button>
                </Link>
				</div>

				<div className="p4Choice">
				<p className="p4">You call the college financial aid office--maybe they can help!</p>
                <Link to="/Simulation2/Option1a2">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice 2
                </button>
                </Link>
				</div>
				</div>
			</div>
		)
	}
}

export default Option1a_2