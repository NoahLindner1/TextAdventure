import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b1b_2 extends Component {
	render() {
		return (
				<div className="Option1Body">
				<h1 className="O1Head">You start having terrible pains in your stomach, and when you finally go to the doctor they run expensive tests to find out that you've developed an ulcer. Ulcer medicines and healthy foods are so expensive! 
</h1>
			<Link to = "/Simuation2"> 
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

export default Option2b1b_2