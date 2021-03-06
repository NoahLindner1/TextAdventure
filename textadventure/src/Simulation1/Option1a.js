import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a.css"

export class Option1a extends Component {
	render() {
		return (
			<div className="Option1AHead">
				<h1 className="head">The store owner is offended and tells you you’re the only one to cause problems with this. What should you do next?</h1>

				<div className="A1buttons">

				<div className="p3Choice">
				<p className="p3">You point out that the store still makes money on these products and threaten to call the state administrators.</p>
				<Link to="/Simulation1/Option1a1">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice one
                </button>
                </Link>
				</div>

				<div className = "p4Choice">
				<p className="p4">You give up on this store and leave.You’ll take the bus to a discount grocery store</p>
                <Link to="/Simulation1/Option1a2">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice two
                </button>
                </Link>
				</div>
				</div>
			</div>
		)
	}
}

export default Option1a