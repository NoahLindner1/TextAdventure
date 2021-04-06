import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1a.css"

export class Option2a1a_2 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You passed the class, paid for the 2 assessments, and had a little extra to celebrate graduation with your roommates.</h1>
			<Link to = "/Simuation1"> 
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

export default Option2a1a_2