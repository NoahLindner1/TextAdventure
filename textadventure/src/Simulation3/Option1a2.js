import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a2_3 extends Component {
	render() {
		return (
			<div>
				<h1>You can't go see the doctor because you don't feel well--your ankles are so swollen, it's too hard to walk.</h1>
				<Link to="/Simulation3/Option1a2a">
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

export default Option1a2_3