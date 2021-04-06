import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Option2.css"
import "./Head.css";


export class Option2 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You immediately report this store to the state.
</h1>
			<div className="choice1">
				 <p className="p1">The store owner’s license to sell WIC products is suspended. How will you get your baby’s formula?
</p>
                <Link to="/Simulation1/Option2a">
                <button
				type="button"
                class='btn2 btn-light'
                >
				choice one
                </button>
                </Link>
				</div>

				<div className="choice2">
				<p className="p2">The store owner finds out he’s been reported and suspects you. He is very rude to you next time you come in.</p>
                <Link to="/Simulation1/Option2b">
                <button
				type="button"
                class='btn2 btn-light'
                >
                choice two
                </button>
                </Link>
				</div>
                </div> 
		)
	}
}

export default Option2