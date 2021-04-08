import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a1a_3 extends Component {
	render() {
		return (
			<div>
				<h1>The sodium in the ranch dressing causes you to gain 10 more pounds of water weight, and your blood pressure skyrockets.</h1>
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

export default Option1a1a_3