import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a2 extends Component {
	render() {
		return (
			<div>
				<h1>You call the local WIC agency to ask how to proceed, and they help you locate a few more cans of formula to tide you over until you can get credit for formula back on your card.
</h1>
				<div>
                <Link to="/Simulation1/Option2a2a">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Next
                </button>
                </Link>
                </div> 
			</div>
		)
	}
}

export default Option2a2