import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a2_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You ask your neighbor's daughter to take you to the extra doctor's visit. </h1>
				<Link to="/Simulation2/Option2a2a">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Next
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2a2_3