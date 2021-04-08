import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b1b_3 extends Component {
	render() {
		return (
			<div>
				<h1>You have to borrow milk and bread from you neighbor at the end of the month, and she's getting pretty tired of your relying on her and her daughter.</h1>
				<Link to="/Simulation2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Restart
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2b1b_3