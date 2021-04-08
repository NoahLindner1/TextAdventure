import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a_3 extends Component {
	render() {
		return (
			<div>
				<h1>Your friend's meds are so old that their potency has changed. You get sick from taking them and need to go to the doctor for an extra time this month.</h1>
				<Link to="/Simulation2/Option2a1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                To be able to afford the bus transportation for the extra doctor visit, you cut back on your meat purchases for the month.  
                </button>
                </Link>
                <Link to="/Simulation2/Option2a2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You ask your neighbor's daughter to take you to the extra doctor's visit. 
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2a_3