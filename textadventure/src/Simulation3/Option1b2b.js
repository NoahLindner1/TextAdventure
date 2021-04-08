import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b2b_3 extends Component {
	render() {
		return (
			<div>
				<h1>The liver was way on sale because it's out of date! You get food poisoning and have to be taken to the ER by ambulance because you're so dehydrated.</h1>
				<Link to="/Simulation3">
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

export default Option1b2b_3