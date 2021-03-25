import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a1 extends Component {
	render() {
		return (
			<div>
				<h1>You haul the diaper bag, purse, and the baby in his stroller on the bus 
                to get to a discount grocery store and then spend some of your limited funds on full-price cans of formula.</h1>
			<Link to="/Simulation1/Option2a1a">
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

export default Option2a1