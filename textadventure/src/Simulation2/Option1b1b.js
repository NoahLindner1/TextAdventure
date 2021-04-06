import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b1b_2 extends Component {
	render() {
		return (
				<div className="Option1Body">
				<h1 className="O1Head">Now you have to pay $75 a month more than you already were to your friends to help with rent and food, and you'll STILL be paying $75 a month when they've graduated with you and moved out of the apartment.
</h1>
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

export default Option1b1b_2