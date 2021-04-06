import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b_3 extends Component {
	render() {
		return (
			<div>
				<h1>You earn the $600 fairly quickly, and you're not failing any courses! But you're so exhausted and rundown that you get sick, develop pneumonia, and wind up spending 3 nights in the hospital. Your parents dropped you from their insurance, so you're responsible for these hospital bills. Now what do you do?</h1>
				<Link to="/Simulation2/Option2b1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You keep working the two jobs, but you take lots of vitamins with the 8 cups of coffee you drink every day.
                </button>
                </Link>
                <Link to="/Simulation2/Option2b2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You take on a third job with the hospital cleaning crew on Sundays. At least if you collapse from exhaustion, you'll already be at the hospital...
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2b_3