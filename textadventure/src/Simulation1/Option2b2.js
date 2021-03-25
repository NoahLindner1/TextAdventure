import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b2 extends Component {
	render() {
		return (
			<div>
				<h1>Your baby picks up on your anxiety and cries whenever you go to that store, and you get a migraine after each visit.
</h1>
				<Link to="/Simulation1/Option2b2b">
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

export default Option2b2