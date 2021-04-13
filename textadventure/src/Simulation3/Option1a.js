import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a_3 extends Component {
	render() {
		return (
			<div className="Option1AHead">
				<h1 className="head">Your cheaper food is chock-full of sodium and artificial flavors, so your blood pressure skyrockets. Now you have to add an extra doctor's visit.</h1>
				
				<div className="A1buttons">
				
				<div className="p3Choice">
				<p className="p3">When you see the doctor, she is concerned about your blood pressure and prescribes a diuretic. There's no generic form of it available, so it's very expensive. You decide to just eat a lot of cucumbers, instead--they're good diuretics! You really like them with ranch dressing.</p>
				<Link to="/Simulation3/Option1a1">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice One
                </button>
                </Link>
				</div>

				<div className = "p4Choice">
				<p className="p4"> You can't go see the doctor because you don't feel well--your ankles are so swollen, it's too hard to walk.</p>
                <Link to="/Simulation3/Option1a2">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
               Choice 2
                </button>
                </Link>
				</div>
				</div>
			</div>
		)
	}
}

export default Option1a_3