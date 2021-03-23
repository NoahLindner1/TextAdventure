import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './Option1.css'

export class Option1 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You try again to talk with the store owner--this is illegal, but you don’t want to get him in trouble.</h1>

				space for and image or video in the middle here
				<div className="buttonArea">
				<Link to="/Simulation1/Option1a">
			
			
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Next
                </button>
                </Link>
			</div>
			</div>
		)
	}
}

export default Option1