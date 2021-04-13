import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You have a friend who has a leftover prescription from a few years ago and doesn't need it anymore. She gives you hers to tide you over for a month.</h1>
				
				<div className="choice1">
				<p className="p1">Your friend's meds are so old that their potency has changed. You get sick from taking them and need to go to the doctor for an extra time this month.</p>
				<Link to="/Simulation2/Option2a">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
               Choice 1
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">Your friend's meds don't do a thing to help you, and now you've gone a week without correctly taking your medicine. That means you have to start over with two of them and take them more often to get them built up in your system. More prescriptions needed.</p>
                <Link to="/Simulation2/Option2b">
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
		)
	}
}

export default Option2_3