import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1_2 extends Component {
	render() {
		return (
			<div className="headBody">
				<h1 className="O1Head">Go to a local lending agency and take out a loan.</h1>
				
				space for image or video

				<div className="buttonArea">
				<Link to="/Simulation2/Option1a">
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

export default Option1_2