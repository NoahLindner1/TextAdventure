import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a2_2 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You call the college financial aid office--maybe they can help!</h1>
				<Link to="/Simulation2/Option1a2a">
                <button
                className='btns'
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

export default Option1a2_2