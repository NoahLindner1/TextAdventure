import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a1.css"

export class Option2a1_2 extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">You change jobs so that you can study while you're at work. It's less money per hour, but maybe it will help.</h1>
				<div className="buttonArea">
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
			</div>
		)
	}
}

export default Option2a1_2