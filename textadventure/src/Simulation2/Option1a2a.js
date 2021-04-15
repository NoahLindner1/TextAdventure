import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a2a_2 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">The financial aid counselor is sympathetic, but doesn't know of any more loans you'll qualify for. And because your grades dropped while you were fighting with your family, you don't qualify for any more scholarships.</h1>
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

export default Option1a2a_2