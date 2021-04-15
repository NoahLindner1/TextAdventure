import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"
export class Option2a2a extends Component {
	render() {
		return (
				<div className="Option1a1Head">
				<h1 className="O1Head">You have to use your last bus tokens to get to and from the agency. You’’ll have to walk and push the baby stroller to the next closest store for anything else you need, on a busy highway about 2 miles away.
</h1>	
			<Link to = "/Simuation1"> 
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

export default Option2a2a