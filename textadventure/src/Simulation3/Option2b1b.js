import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b1b_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You have to borrow milk and bread from you neighbor at the end of the month, and she's getting pretty tired of your relying on her and her daughter.</h1>
				<Link to="/Simulation3">
                <button
                className='btn2'
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