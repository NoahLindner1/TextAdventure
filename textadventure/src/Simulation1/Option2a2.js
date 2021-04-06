import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option2a2 extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">You call the local WIC agency to ask how to proceed, and they help you locate a few more cans of formula to tide you over until you can get credit for formula back on your card.
</h1>
			<div className="buttonArea">
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