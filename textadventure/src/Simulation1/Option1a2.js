import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a2 extends Component {
	render() {
		return (
			<div>
				<h1>You give up on this store and leave.You’ll take the bus to a discount grocery store</h1>
				<Link to="/Simulation1/Option1a2a">
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

export default Option1a2