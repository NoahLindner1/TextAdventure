import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Head extends Component {
	render() {
		return (
			<div>
				<h1>You are a 30-year-old African-American woman whose husband was a victim of a hit-and-run. He is waiting to get on disability from his permanent injuries. You have an adorable 6-week-old baby boy. You were working full-time at a convenience store, but they don’t have maternity leave and you are really strapped for cash and food from the time you weren’t working. You have a SNAP card and visit the local corner store that’s WIC-certified to purchase 10 cans of WIC formula for your new baby. Your card authorizes 10 cans, but the store owner tells you it’s only good for 2 cans. You have no car and rely on this neighborhood store for its location and WIC supplies.</h1>
                <Link to="/Simulation1/Option1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You try again to talk with the store owner--this is illegal, but you don’t want to get him in trouble
                </button>
                </Link>
                <Link to="/Simulation1/Option2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                You immediately report this store to the state.
                </button>
                </Link>
            </div>
		);
	}
}

export default Head