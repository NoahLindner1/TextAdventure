import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">Your friend's meds are so old that their potency has changed. You get sick from taking them and need to go to the doctor for an extra time this month.</h1>
				
				<div className="A1buttona">
				<div className="p3Choice">
				<p className="p3"> To be able to afford the bus transportation for the extra doctor visit, you cut back on your meat purchases for the month.  </p>
				<Link to="/Simulation2/Option2a1">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
               Choice One
                </button>
                </Link>
				</div>

				<div className = "p4Choice">
				<p className="p4">You ask your neighbor's daughter to take you to the extra doctor's visit. </p>
                <Link to="/Simulation2/Option2a2">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                
                </button>
                </Link>
				</div>
				</div>
			</div>
		)
	}
}

export default Option2a_3