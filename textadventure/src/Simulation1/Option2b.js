import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"
import "./Head.css";
export class Option2b extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">The store owner finds out he’s been reported and suspects you. He is very rude to you next time you come in.</h1>
					<div className="choice1">
				 <p className="p1">You tell the store owner he’s already on thin ice, and then call the state again.</p>
                <Link to="/Simulation1/Option2b1">
                <button
				type="button"
                class='btn2 btn-light'
                >
				Choice one
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">Your baby picks up on your anxiety and cries whenever you go to that store, and you get a migraine after each visit.</p>
                <Link to="/Simulation1/Option2b2">
                <button
				type="button"
                class='btn2 btn-light'
                >
                Choice two
                </button>
                </Link>
				</div>
			</div>
		)
	}
}

export default Option2b