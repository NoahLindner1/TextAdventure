import React, { Component } from 'react'
import Cards from './Cards';
import CardItem from './CardItem';

export class SimulationHome extends Component {
	render() {
		return (
			<div>
				Profiles will go in these cards
				<Cards />
			</div>
		)
	}
}

export default SimulationHome
