import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1a.css"

export class Option1a2a extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">The store owner cheats the next WIC customer who comes in, and you have to haul the baby, the stroller, diaper bag, and purse on the bus to the discount grocery store and then spend some of your limited funds on full-price cans of formula.</h1>
			  
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

export default Option1a2a