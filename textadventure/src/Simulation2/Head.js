import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Head.css";

export class Head_2 extends Component {
	render() {
		return (
			<div className="headBody">
				<p className="userStory1">You are a 21-year-old transgender woman whose parents have withdrawn their financial and emotional support because they disapprove of your gender identity. You are in your senior year of college and will lose your financial aid if you don’t attend college full-time, but keeping up with classes and attending full-time limits your ability to find work that pays a decent wage. Your friends are sharing their one-bedroom flat with you, but you need to help pay rent and buy food. You’ve managed to persuade classmates to share textbooks with you, and the school library has laptops to check out. You are food insecure and living out of a suitcase, but it’s just one more year of school, then you’ll be an adult anyway and will have a degree to help you find a good job.</p>
				
				<div className="choice1">
				 <p className="p1">Go to a local lending agency and take out a loan.</p>
                <Link to="/Simulation2/Option1">
                <button
				type="button"
                class='btn2 btn-light'
                >
				Choice one
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">Take two part-time jobs from 6-8 am and 8 pm to midnight. You can sleep on Sunday, right?</p>
                <Link to="/Simulation2/Option2">
                <button
				type="button"
                class='btn2 btn-light'
                >
                Choice two
                </button>
                </Link>
				</div>
            </div>
		);
	}
}

export default Head_2