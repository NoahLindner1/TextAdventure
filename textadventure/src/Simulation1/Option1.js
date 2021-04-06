import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './Option1.css'

export class Option1 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You try again to talk with the store owner--this is illegal, but you don’t want to get him in trouble.</h1>

             	<div className="choice1">
				 <p className="p1">The store owner is offended and tells you you’re the only one to cause problems with this. What should you do next?</p>
                <Link to="/Simulation1/Option1a">
                <button
				type="button"
                class='btn2 btn-light'
                >
				Choice one
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">The store owner apologizes, but it’s too late because the card already deducted the full amount. What should you do next?</p>
                <Link to="/Simulation1/Option1b">
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

export default Option1