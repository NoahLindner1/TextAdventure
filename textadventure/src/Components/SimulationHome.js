import React, { Component } from 'react'
import Cards from './Cards';
import CardItem from './CardItem';
import ProfileCards from './ProfileCards';
import './SimulationHome.css';

export class SimulationHome extends Component {
	render() {
		return (
			<div>
				<h2>
					Profile Simulations Home Page
				</h2>
				<div className="profiles">
					<ProfileCards/>
				</div>
				
			</div>
		)
	}
}

export default SimulationHome
