import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Head_2 extends Component {
	render() {
		return (
			<div>
				<h1>You are a 21-year-old transgender woman whose parents have withdrawn their financial and emotional support because they disapprove of your gender identity. You are in your senior year of college and will lose your financial aid if you don’t attend college full-time, but keeping up with classes and attending full-time limits your ability to find work that pays a decent wage. Your friends are sharing their one-bedroom flat with you, but you need to help pay rent and buy food. You’ve managed to persuade classmates to share textbooks with you, and the school library has laptops to check out. You are food insecure and living out of a suitcase, but it’s just one more year of school, then you’ll be an adult anyway and will have a degree to help you find a good job.</h1>
                <h2>CHALLENGE: You just found out there are two outside assessments you have to pass before you can graduate, and each one costs $300! What are you going to do?</h2>                
                <Link to="/Simulation2/Option1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Go to a local lending agency and take out a loan.
                </button>
                </Link>
                <Link to="/Simulation2/Option2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Take two part-time jobs from 6-8 am and 8 pm to midnight. You can sleep on Sunday, right?
                </button>
                </Link>
            </div>
		);
	}
}

export default Head_2