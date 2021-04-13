import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a1_3 extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">When you see the doctor, she is concerned about your blood pressure and prescribes a diuretic. There's no generic form of it available, so it's very expensive. You decide to just eat a lot of cucumbers, instead--they're good diuretics! You really like them with ranch dressing.</h1>
				
				<div className="buttonArea">
				<Link to="/Simulation3/Option1a1a">
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

export default Option1a1_3