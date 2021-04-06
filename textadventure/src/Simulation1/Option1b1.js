import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1a.css"
export class Option1b1 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You ask for store credit since the store profits, anyway.</h1>
			<div className="buttonArea">
				<Link to="/Simulation1/Option1b1b">

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

export default Option1b1