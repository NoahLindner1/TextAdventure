import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a_2 extends Component {
	render() {
		return (
			<div>
				<h1>The loan company turns you down because your credit score is too high. Now what do you do?</h1>
				<Link to="/Simulation2/Option1a1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You tell the loan company about your trust fund--you'll be getting it in a year.
                </button>
                </Link>
                <Link to="/Simulation2/Option1a2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You call the college financial aid office--maybe they can help!
                </button>
                </Link>
			</div>
		)
	}
}

export default Option1a_2