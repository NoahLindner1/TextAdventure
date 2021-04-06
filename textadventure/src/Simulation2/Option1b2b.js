import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b2b_2 extends Component {
	render() {
		return (
				<div className="Option1Body">
				<h1 className="O1Head">The car isn't bad, except for when you have to pee or when the creepy homeless people peek in at you. It's getting colder, though.
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

export default Option1b2b_2