import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b2b_3 extends Component {
	render() {
		return (
			<div>
				<h1>The car isn't bad, except for when you have to pee or when the creepy homeless people peek in at you. It's getting colder, though.</h1>
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

export default Option1b2b_3