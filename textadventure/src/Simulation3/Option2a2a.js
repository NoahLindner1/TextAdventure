import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a2a_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">Your neighbor's daughter WANTS to help, but she has to work late and picks you up late. You miss your appointment time and your doctor office's policy is to charge you $50 for missed appointments.</h1>
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

export default Option2a2a_3