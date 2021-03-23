import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './Option1a.css'

export class Option1a extends Component {
	render() {
		return (
			<div className="Option1AHead">
				<h1>The store owner is offended and tells you you’re the only one to cause problems with this. What should you do next?</h1>
				<Link to="/Simulation1/Option1a1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You point out that the store still makes money on these products and threaten to call the state administrators.
                </button>
                </Link>
                <Link to="/Simulation1/Option1a2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You give up on this store and leave.You’ll take the bus to a discount grocery store
                </button>
                </Link>
			</div>
		)
	}
}

export default Option1a