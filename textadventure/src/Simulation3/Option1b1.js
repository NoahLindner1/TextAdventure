import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b1_3 extends Component {
	render() {
		return (
			<div>
				<h1>You can't afford to buy any fruit because the iron tablets cost so much. The iron makes you constipated and you're really uncomfortable.</h1>
				<Link to="/Simulation3/Option1b1b">
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

export default Option1b1_3