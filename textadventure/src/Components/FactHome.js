import React, { Component } from 'react';
import './FactHome.css';
import PovertyThreshholdTable from './PovertyThreshholdTable'
import UnderagePovertyTable from './UnderagePovertyTable'

export class FactHome extends Component {
	render() {
		return (
			<div>
				<h2>
					Learn More
				</h2>
				<div className="row">
					<div className="col" style={{padding: '25px'}}>
						<h3>About Us</h3>
						<p>
						This online simulation is the product of the research, creativity, and dedication of a number of individuals who are passionate about fostering a greater, collective understanding of the experiences of those living in the condition of poverty and/or living with limited resources and lower income in the US.</p>
						<p> 
						Dr. Patty Rieman, Associate Professor of Education at Carthage College in Kenosha, Wisconsin began this project as part of her sabbatical work in fall 2020 and continued the work when she resumed teaching full time (with an overload) in spring 2021. </p>
						<p> 
						Patty worked in partnership with the Kenosha branch of the Racine Kenosha Community Action Agency, namely Pamela Halbach, RKCAA Kenosha Director/WIC Director, and Lisa A. Piche, Program/Planning Support Coordinator. Ms. Halbach and Ms. Piche were instrumental in providing current statistics on poverty in Kenosha County, as well as connecting Patty with other Emergency Service Agencies. They also gave valuable, insightful feedback throughout the project and assisted in developing the content for the simulations.</p>
						<p>
						Carthage College students enrolled in Professor Rick Bingen’s course in Agile Software Development provided invaluable expertise in turning the case studies and story lines into the digital simulation. This project could not have been completed without this fine work by Brad Dodds, Noah Lindner, Omarr Roberts, Jameson Stahl, and Alejandro Vargas, all under the watchful eye of Professor Bingen. </p> 
						<p> Lastly, Joe Pourroy provided strong support on the home front with admirable patience and assisted in locating images to fit into the storylines. 
							For more information on this project, Dr. Rieman can be reached at <a href="mailto:prieman@carthage.edu">prieman@carthage.edu</a>. Visit <a href="https://www.carthage.edu/live/profiles/124-patricia-rieman">https://www.carthage.edu/live/profiles/124-patricia-rieman </a> 
							to learn more about the Racine Kenosha Community Action Agency, visit<a href="https://www.rkcaa.org/kenosha"> https://www.rkcaa.org/kenosha </a>. 
						</p>
				<br/>
					</div>
					<div className="col">
						<h3>Quick Facts</h3>
						<ul>
							<li>In 2019, nearly 35 million people lived below the poverty line in the United States. Of those, over 10 million were children.</li>
							<li>Poverty in Detroit (30.6%) and Flint (32.6%) is roughly 3 times the national rate.</li>
							<li>43.2% of children in Detroit and 40.6% of children in Flint live in households with incomes below the poverty line. </li>
							<li>In 2019, 34 million people lived in poverty in America. For a family of four, that means earning just $25,000 per year. </li>
							<li>Before the coronavirus pandemic, more than 35 million people faced hunger in the United States, including more than 10 million children.</li>
							<li>A household that is food insecure has limited or uncertain access to enough food to support a healthy life.</li>
							<li>Children are more likely to face food insecurity than any other group in the United States. </li>
							<li>The coronavirus pandemic has left millions of families without stable employment. More than 42 million people, including 13 million children, may experience food insecurity.</li>
						</ul>
						<div> 
							<h2 style={{textAlign: 'center', float: 'top', color: 'green', fontWeight: 'bold'}}>1 in 6</h2>
							<h3 style={{textAlign: 'center', float: 'center'}}>CHILDREN IN THE U.S. ARE LIVING IN FOOD-INSECURE HOUSEHOLDS</h3>
						</div>
					</div>
				</div>
				<br/>
				<div className="row">
				<div className="col">
						<div style={{float: 'center'}}>
							<PovertyThreshholdTable/>
						</div>
					</div>
					<div className="col">
						<br/>
						<div style={{float: 'center'}}>
							<UnderagePovertyTable/>
						</div>
					</div>
				</div>
				<div className="glossary">
							<a className="btn btn-outline-dark" href="poverty-facts/glossary" >
								<h4>Glossary of Terms</h4>
							</a>
						</div>
			</div>
		)
	}
}

export default FactHome
