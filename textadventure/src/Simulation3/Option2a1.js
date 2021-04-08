import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a1_3 extends Component {
	render() {
		return (
			<div>
				<h1>To be able to afford the bus transportation for the extra doctor visit, you cut back on your meat purchases for the month.</h1>
				<Link to="/Simulation2/Option2a1a">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Next
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2a1_3