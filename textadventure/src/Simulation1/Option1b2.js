import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1a.css"

export class Option1b2 extends Component {
	render() {
		return (
				<div className="Option1Body">
				<h1 className="O1Head">You threaten to call state administrators.</h1>
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

export default Option1b2