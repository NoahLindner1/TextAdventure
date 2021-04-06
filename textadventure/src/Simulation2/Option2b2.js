import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option2b2_2 extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">You take on a third job with the hospital cleaning crew on Sundays. At least if you collapse from exhaustion, you'll already be at the hospital...</h1>
				<div className="buttonArea">
				<Link to="/Simulation2/Option2b2b">

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

export default Option2b2_2