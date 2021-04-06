import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1a.css"

export class Option1b extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">The store owner apologizes, but it’s too late because the card already deducted the full amount. What should you do next?</h1>
					<div className="choice1">
				 <p className="p1">You ask for store credit since the store profits, anyway.</p>
                <Link to="/Simulation1/Option1b1">
                <button
				type="button"
                class='btn2 btn-light'
                >
				Choice one
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">You threaten to call state administrators.</p>
                <Link to="/Simulation1/Option1b2">
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

export default Option1b