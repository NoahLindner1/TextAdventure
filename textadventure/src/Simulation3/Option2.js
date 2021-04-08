import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2_3 extends Component {
	render() {
		return (
			<div>
				<h1>You have a friend who has a leftover prescription from a few years ago and doesn't need it anymore. She gives you hers to tide you over for a month.</h1>
				<Link to="/Simulation2/Option2a">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
               Your friend's meds are so old that their potency has changed. You get sick from taking them and need to go to the doctor for an extra time this month.
                </button>
                </Link>
                <Link to="/Simulation2/Option2b">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Your friend's meds don't do a thing to help you, and now you've gone a week without correctly taking your medicine. That means you have to start over with two of them and take them more often to get them built up in your system. More prescriptions needed.
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2_3