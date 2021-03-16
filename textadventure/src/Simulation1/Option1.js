import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1 extends Component {
	render() {
		return (
			<div>
				<h1>You try again to talk with the store owner--this is illegal, but you don’t want to get him in trouble.</h1>
				<Link to="/Simulation1/Option1a">
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

export default Option1