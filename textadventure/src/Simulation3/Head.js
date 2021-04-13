import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Head_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<p className="userStory1">You are a 75-year-old woman living is subsidized housing. You've never worked but get a monthly income from your dead husband's social security benefit. You are in ill health and are on many medications that sometimes require you to choose between healthy food and having enough medicine. Your neighbor's daughter will take you to the store now and then, but is unreliable. You also use public transportation to get to your doctor's appointments when you feel well enough to get there.</p>
                <h2>CHALLENGE: Purchase this month's supply of medications.</h2>     

				<div className="choice1">
				<p className="p1">Stock up on foods from the $1 aisle at the grocery store so that you'll have enough money for all your medicine.</p>         
                <Link to="/Simulation3/Option1">
                <button
                className='btn2 btn-light'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice 1
                </button>
                </Link>
				</div>  

				<div className="choice2">
				<p className="p2">You have a friend who has a leftover prescription from a few years ago and doesn't need it anymore. She gives you hers to tie you over for a month.</p>
                <Link to="/Simulation3/Option2">
                <button
                className='btn2 btn-light'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Choice 2
                </button>
                </Link>
            </div>
			</div>
		);
	}
}

export default Head_3