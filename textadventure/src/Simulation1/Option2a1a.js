import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"
export class Option2a1a extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head"> You have enough formula for a few days, but don’t have enough money for all the diapers you need.</h1>
			<Link to= "/Simuation1"> 
			<button 
			className="btn2"
			buttonStyle="btn--outline"
			buttonSize="btn--large"
			>
			restart
			</button>
			</Link>
			</div>
		)
	}
}

export default Option2a1a