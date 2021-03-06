import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1a.css"

export class Option1a1a extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">The store owner promises to give you store credit for the other 8 cans if she doesn’t call.</h1>
				
				<Link to="/Simulation1">
				<button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Restart
                </button>
				</Link>
			</div>
		)
	}
}

export default Option1a1a