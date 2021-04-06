import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option2a2_2 extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">You start drinking "high octane" energy drinks with lots of caffeine.</h1>
				<div className="buttonArea">
				<Link to="/Simulation2/Option2a2a">

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

export default Option2a2_2