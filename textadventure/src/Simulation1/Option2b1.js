import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b1 extends Component {
	render() {
		return (
			<div>
				<h1>You tell the store owner he’s already on thin ice, and then call the state again.
</h1>
				<Link to="/Simulation1/Option2b1b">
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

export default Option2b1