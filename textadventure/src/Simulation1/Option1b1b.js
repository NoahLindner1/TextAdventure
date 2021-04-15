import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1a.css"

export class Option1b1b extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">The store owner reluctantly agrees, and is clearly angry and kind of frightening when he slams the cash register closed and glares at you. He is very rude to you after that.</h1>
		<Link to="/Simulation1">
				<button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Restart
                </button>
				</Link>
			</div>
		)
	}
}

export default Option1b1b