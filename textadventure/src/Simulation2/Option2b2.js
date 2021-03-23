import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b2_2 extends Component {
	render() {
		return (
			<div>
				<h1>You threaten to call state administrators.</h1>
				<Link to="/Simulation1/Option1b2b">
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

export default Option2b2_2