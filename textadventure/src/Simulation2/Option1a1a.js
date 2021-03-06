import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1a.css"

export class Option1a1a_2 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You get the $600 loan, but you'll have to pay $75 a month for 24 months. That's $75 a month more than you already were paying to your friends to help with rent and food, and you'll STILL be paying $75 a month when you've all graduated and they've moved out of the apartment in May. </h1>
			<Link to = "/Simuation2"> 
			<button 
			className="btn2"
			buttonStyle="btn--outline"
			buttonSize="btn--large"
			>
			Restart
			</button>
			</Link>
			
			
			</div>
		)
	}
}

export default Option1a1a_2