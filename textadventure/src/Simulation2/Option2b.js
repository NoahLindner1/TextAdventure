import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a.css"

export class Option2b_2 extends Component {
	render() {
		return (
			<div className="Option1AHead">
				<h1 className="head">You earn the $600 fairly quickly, and you're not failing any courses! But you're so exhausted and rundown that you get sick, develop pneumonia, and wind up spending 3 nights in the hospital. Your parents dropped you from their insurance, so you're responsible for these hospital bills. Now what do you do?</h1>

				<div className="A1buttons">

				<div className="p3Choice">
				<p className="p3">You keep working the two jobs, but you take lots of vitamins with the 8 cups of coffee you drink every day.</p>
				<Link to="/Simulation2/Option2b1">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice one
                </button>
                </Link>
				</div>

				<div className = "p4Choice">
					<p className="p4">You take on a third job with the hospital cleaning crew on Sundays. At least if you collapse from exhaustion, you'll already be at the hospital...</p>
                <Link to="/Simulation2/Option2b2">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice two
                </button>
                </Link>
				</div>
				</div>
			</div>
		)
	}
}

export default Option2b_2