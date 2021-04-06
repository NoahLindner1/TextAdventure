import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option2b2 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">Your baby picks up on your anxiety and cries whenever you go to that store, and you get a migraine after each visit.
</h1>
			<div className="buttonArea">
				<Link to="/Simulation1/Option2b2b">

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

export default Option2b2