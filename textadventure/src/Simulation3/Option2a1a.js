import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a1a_3 extends Component {
	render() {
		return (
			<div>
				<h1>You passed the class, paid for the 2 assessments, and had a little extra to celebrate graduation with your roommates.</h1>
				<Link to="/Simulation2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Restart
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2a1a_3