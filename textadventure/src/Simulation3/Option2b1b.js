import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b1b_3 extends Component {
	render() {
		return (
			<div>
				<h1>You start having terrible pains in your stomach, and when you finally go to the doctor they run expensive tests to find out that you've developed an ulcer. Ulcer medicines and healthy foods are so expensive!</h1>
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