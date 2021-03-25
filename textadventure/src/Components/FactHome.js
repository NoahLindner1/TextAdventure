import React, { Component } from 'react';
import './FactHome.css';

export class FactHome extends Component {
	render() {
		return (
			<div>
				<h2>
					Learn More
				</h2>
				<div className="row">
					<div className="col-sm">
						<h3>About Us</h3>
					</div>
					<div className="col-sm">
						<h3>Quick Facts</h3>
						<ul>
					<li>Fact 1</li>
					<li>Fact 2</li>
					<li>Fact 3</li>
				</ul>
						
					</div>
				</div>
				<div className="glossary">
					<a className="btn btn-outline-dark" href="poverty-facts/glossary">
						<h4>Glossary of Terms</h4>
					</a>
				</div>
			</div>
		)
	}
}

export default FactHome
