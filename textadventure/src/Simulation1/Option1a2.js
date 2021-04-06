import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a2 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You give up on this store and leave.You’ll take the bus to a discount grocery store</h1>
			<div className="buttonArea">
				<Link to="/Simulation1/Option1b2b">

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

export default Option1a2