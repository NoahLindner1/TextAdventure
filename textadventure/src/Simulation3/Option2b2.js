import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2b2_3 extends Component {
	render() {
		return (
			<div>
				<h1>You take on a third job with the hospital cleaning crew on Sundays. At least if you collapse from exhaustion, you'll already be at the hospital...</h1>
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
		)
	}
}

export default Option2b2_3