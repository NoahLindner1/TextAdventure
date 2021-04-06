import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b2b_2 extends Component {
	render() {
		return (
				<div className="Option1Body">
				<h1 className="O1Head">It's just too much. You're so mentally, physically, emotionally exhausted that you no longer care about attending class or finishing your degree. You stop going to classes and fail the semester, so you'll have to complete one extra semester of classes in order to graduate. But you do have the $600 for the assessments.
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

export default Option2b2b_2