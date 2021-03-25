import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option2.css"

export class Option2 extends Component {
	render() {
		return (
			<div>
				<h1>You immediately report this store to the state.
</h1>
				<Link to="/Simulation1/Option2a1">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
               The store owner’s license to sell WIC products is suspended. How will you get your baby’s formula?
                </button>
                </Link>
                <Link to="/Simulation1/Option2a2">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                The store owner finds out he’s been reported and suspects you. He is very rude to you next time you come in.
                </button>
                </Link>
			</div>
		)
	}
}

export default Option2