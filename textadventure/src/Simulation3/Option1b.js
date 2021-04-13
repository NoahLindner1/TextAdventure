import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option1b_3 extends Component {
	render() {
		return (
			<div className="Option1Body">
				<h1 className="O1Head">You don't get enough iron in your diet and become anemic. The doctor tells you to take prescription-strength iron tablets.</h1>
				
				<div className="A1buttons">

				<div className="p3Choice">
				<p className="p3">You can't afford to buy any fruit because the iron tablets cost so much. The iron makes you constipated and you're really uncomfortable.</p>
				<Link to="/Simulation3/Option1b1">
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
				<p className="p4"> Instead of buying the iron tablets, you buy some liver that was way on sale at the store. One good meal should fix you right up, right?</p>
                <Link to="/Simulation3/Option1b2">
                <button
                className='btn2'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
               Choice Two
                </button>
                </Link>
				</div>
			</div>
			</div>
		)
	}
}

export default Option1b_3