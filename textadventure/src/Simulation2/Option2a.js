import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option1a.css"

export class Option2a_2 extends Component {
	render() {
		return (
			<div className="Option1AHead">
				<h1 className="head">You are exhausted ALL THE TIME. Your professors notice you're falling asleep in class, and you are failing exams you would normally have aced because you fall asleep while studying. Now what do you do?</h1>

				<div className="A1buttons">

				<div className="p3Choice">
				<p className="p3">You change jobs so that you can study while you're at work. It's less money per hour, but maybe it will help.</p>
				<Link to="/Simulation2/Option2a1">
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
					<p className="p4">You start drinking "high octane" energy drinks with lots of caffeine. </p>
                <Link to="/Simulation2/Option2a2">
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

export default Option2a_2