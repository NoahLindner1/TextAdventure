import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Option2a1_3 extends Component {
	render() {
		return (
			<div className="Option1a1Head">
				<h1 className="O1Head">To be able to afford the bus transportation for the extra doctor visit, you cut back on your meat purchases for the month.</h1>
				
                <div className="buttonArea">
                <Link to="/Simulation3/Option2a1a">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Next
                </button>
                </Link>
			</div>
            </div>
		)
	}
}

export default Option2a1_3