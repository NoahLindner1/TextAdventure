import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a1_2 extends Component {
	render() {
		return (
			<div>
				<h1>You change jobs so that you can study while you're at work. It's less money per hour, but maybe it will help.</h1>
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

export default Option2a1_2