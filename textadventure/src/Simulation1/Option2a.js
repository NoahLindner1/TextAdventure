import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a extends Component {
	render() {
		return (
			<div>
				<h1>The store owner's license to sell WIC products is suspended. How will you get baby formula?</h1>
				<Link to="/Simulation1/Option2a1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You haul the diaper bag, purse, and the baby in his stroller on the bus to get to a discount grocery store and then spend some of your limited funds on full-price cans of formula.
                </button>
                </Link>
                <Link to="/Simulation1/Option2a2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You call the local WIC agency to ask how to proceed, and they help you locate a few more cans of formula to tide you over until you can get credit for formula back on your card.

                </button>
                </Link>
			</div>
		)
	}
}

export default Option2a