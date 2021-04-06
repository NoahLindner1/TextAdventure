import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option2a1 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You haul the diaper bag, purse, and the baby in his stroller on the bus 
                to get to a discount grocery store and then spend some of your limited funds on full-price cans of formula.</h1>
			<div className="buttonArea">
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
            </div>
		)
	}
}

export default Option2a1