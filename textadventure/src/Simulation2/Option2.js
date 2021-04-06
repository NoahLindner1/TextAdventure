import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './Option1.css'

export class Option2_2 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">Take two part-time jobs from 6-8 am and 8 pm to midnight. You can sleep on Sunday, right?</h1>
             	<div className="choice1">
				 <p className="p1">You are exhausted ALL THE TIME. Your professors notice you're falling asleep in class, and you are failing exams you would normally have aced because you fall asleep while studying. Now what do you do?</p>
                <Link to="/Simulation2/Option2a">
                <button
				type="button"
                class='btn2 btn-light'
                >
	            Choice one
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">You earn the $600 fairly quickly, and you're not failing any courses! But you're so exhausted and rundown that you get sick, develop pneumonia, and wind up spending 3 nights in the hospital. Your parents dropped you from their insurance, so you're responsible for these hospital bills. Now what do you do?</p>
                <Link to="/Simulation2/Option2b">
                <button
				type="button"
                class='btn2 btn-light'
                >
                Choice two
                </button>
                </Link>
				</div>
			</div>
		)
	}
}

export default Option2_2