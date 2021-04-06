import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option2b1_2 extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">You keep working the two jobs, but you take lots of vitamins with the 8 cups of coffee you drink every day.</h1>
				<div className="buttonArea">
				<Link to="/Simulation2/Option2b1b">

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

export default Option2b1_2