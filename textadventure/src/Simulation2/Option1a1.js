import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option1a1_2 extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">You tell the loan company about your trust fund--you'll be getting it in a year.</h1>
				<div className="buttonArea">
				<Link to="/Simulation2/Option1a1a">

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

export default Option1a1_2