import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"
import "./Head.css";
export class Option2a extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">The store owner's license to sell WIC products is suspended. How will you get baby formula?</h1>
					<div className="choice1">
				 <p className="p1">You haul the diaper bag, purse, and the baby in his stroller on the bus to get to a discount grocery store and then spend some of your limited funds on full-price cans of formula.</p>
                <Link to="/Simulation1/Option2a1">
                <button
				type="button"
                class='btn2 btn-light'
                >
				Choice one
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">You call the local WIC agency to ask how to proceed, and they help you locate a few more cans of formula to tide you over until you can get credit for formula back on your card.</p>
                <Link to="/Simulation1/Option2a2">
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

export default Option2a