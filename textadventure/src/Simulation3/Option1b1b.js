import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b1b_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You buy a cheap laxative that your body overreacts to, and now you're dehydrated and need to go to the ER for fluids.</h1>
				
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

export default Option1b1b_3