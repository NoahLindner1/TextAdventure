import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option2b2b extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You avoid the store owner by walking and pushing your baby stroller to the next closest store that’s on a busy highway, 2 miles away.
</h1>
				<Link to="/Simulation1">
				<button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                restart
                </button>
				</Link>
			</div>
		)
	}
}

export default Option2b2b