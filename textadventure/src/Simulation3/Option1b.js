import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b_3 extends Component {
	render() {
		return (
			<div>
				<h1>You don't get enough iron in your diet and become anemic. The doctor tells you to take prescription-strength iron tablets.</h1>
				<Link to="/Simulation3/Option1b1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You can't afford to buy any fruit because the iron tablets cost so much. The iron makes you constipated and you're really uncomfortable.
                </button>
                </Link>
                <Link to="/Simulation3/Option1b2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Instead of buying the iron tablets, you buy some liver that was way on sale at the store. One good meal should fix you right up, right?
                </button>
                </Link>
			</div>
		)
	}
}

export default Option1b_3