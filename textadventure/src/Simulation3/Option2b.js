import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b_3 extends Component {
	render() {
		return (
			<div>
				<h1>Your friend's meds don't do a thing to help you, and now you've gone a week without correctly taking your medicine. That means you have to start over with two of them and take them more often to get them built up in your system. More prescriptions needed.</h1>
				<Link to="/Simulation2/Option2b1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Starting over with the extra amount of medication means you need extra amounts of certain foods that help your body with the side effects of the medication. You had budgeted your SNAP card for the month, but decide to use it up early. 
                </button>
                </Link>
                <Link to="/Simulation2/Option2b2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Instead of spending money on the city bus or asking your neighbor's daughter for a ride, you decide to walk to the pharmacy yourself. It's nice out, and you have your walker with the build-in seat--you should be fine!
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2b_3