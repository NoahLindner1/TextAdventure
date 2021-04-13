import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1a2a_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">Your neighbor finds you unconscious because of your high blood pressure and calls an ambulance.</h1>
				
				
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

export default Option1a2a_3