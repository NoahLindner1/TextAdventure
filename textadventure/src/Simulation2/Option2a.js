import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a_2 extends Component {
	render() {
		return (
			<div>
				<h1>You are exhausted ALL THE TIME. Your professors notice you're falling asleep in class, and you are failing exams you would normally have aced because you fall asleep while studying. Now what do you?</h1>
				<Link to="/Simulation2/Option2a1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You change jobs so that you can study while you're at work. It's less money per hour, but maybe it will help.
                </button>
                </Link>
                <Link to="/Simulation2/Option2a2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You start drinking "high octane" energy drinks with lots of caffeine.
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2a_2