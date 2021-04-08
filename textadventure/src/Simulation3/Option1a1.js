import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a1_3 extends Component {
	render() {
		return (
			<div>
				<h1>When you see the doctor, she is concerned about your blood pressure and prescribes a diuretic. There's no generic form of it available, so it's very expensive. You decide to just eat a lot of cucumbers, instead--they're good diuretics! You really like them with ranch dressing.</h1>
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
		)
	}
}

export default Option1a1_3