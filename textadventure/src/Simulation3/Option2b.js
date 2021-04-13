import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">Your friend's meds don't do a thing to help you, and now you've gone a week without correctly taking your medicine. That means you have to start over with two of them and take them more often to get them built up in your system. More prescriptions needed.</h1>
				
				<div className="A1buttons">
				
				<div className="p3Choice">
				<p className="p3">Starting over with the extra amount of medication means you need extra amounts of certain foods that help your body with the side effects of the medication. You had budgeted your SNAP card for the month, but decide to use it up early. </p>
				<Link to="/Simulation3/Option2b1">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice One
                </button>
                </Link>
				</div>
				

				<div className="p4Choice">
				<p className="p4">Instead of spending money on the city bus or asking your neighbor's daughter for a ride, you decide to walk to the pharmacy yourself. It's nice out, and you have your walker with the build-in seat--you should be fine!</p>
                <Link to="/Simulation3/Option2b2">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice Two
                </button>
                </Link>
				</div>
			</div>
			</div>
		)
	}
}

export default Option2b_3