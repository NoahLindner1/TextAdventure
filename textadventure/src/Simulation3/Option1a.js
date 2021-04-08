import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a_3 extends Component {
	render() {
		return (
			<div>
				<h1>Your cheaper food is chock-full of sodium and artificial flavors, so your blood pressure skyrockets. Now you have to add an extra doctor's visit.</h1>
				<Link to="/Simulation3/Option1a1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                When you see the doctor, she is concerned about your blood pressure and prescribes a diuretic. There's no generic form of it available, so it's very expensive. You decide to just eat a lot of cucumbers, instead--they're good diuretics! You really like them with ranch dressing.
                </button>
                </Link>
                <Link to="/Simulation3/Option1a2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You can't go see the doctor because you don't feel well--your ankles are so swollen, it's too hard to walk.
                </button>
                </Link>
			</div>
		)
	}
}

export default Option1a_3