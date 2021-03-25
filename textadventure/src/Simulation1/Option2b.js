import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b extends Component {
	render() {
		return (
			<div>
				<h1>The store owner finds out he’s been reported and suspects you. He is very rude to you next time you come in.</h1>
				<Link to="/Simulation1/Option2b1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You tell the store owner he’s already on thin ice, and then call the state again.

                </button>
                </Link>
                <Link to="/Simulation1/Option2b2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Your baby picks up on your anxiety and cries whenever you go to that store, and you get a migraine after each visit.
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2b