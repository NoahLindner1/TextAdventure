import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b2_3 extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">Instead of spending money on the city bus or asking your neighbor's daughter for a ride, you decide to walk to the pharmacy yourself. It's nice out, and you have your walker with the build-in seat--you should be fine!</h1>
				
				<div className="buttonArea">
				<Link to="/Simulation3/Option2b2b">
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

export default Option2b2_3