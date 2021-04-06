import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option2b1 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You tell the store owner he’s already on thin ice, and then call the state again.
</h1>
		<div className="buttonArea">
				<Link to="/Simulation1/Option2b1b">

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

export default Option2b1