import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b2_3 extends Component {
	render() {
		return (
			<div>
				<h1> Instead of buying the iron tablets, you buy some liver that was way on sale at the store. One good meal should fix you right up, right?</h1>
				<Link to="/Simulation3/Option1b2b">
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

export default Option1b2_3