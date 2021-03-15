import React, { Component } from 'react'
import Cards from './Cards';
import CardItem from './CardItem';
import ProfileCard from './ProfileCards';

export class SimulationHome extends Component {
	render() {
		return (
			<div>
				Profiles will go here. I am inside the Simulation Home Component rn
				<ProfileCard />
			</div>
		)
	}
}

export default SimulationHome
