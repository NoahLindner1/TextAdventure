import React from 'react';
import Navbar from './Components/NavBar';
import './App.css';
import Home from './Components/Home';
import { SimulationHome } from "./Components/SimulationHome.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Head from './Simulation1/Head';
import Option1 from './Simulation1/Option1';
import Option2 from './Simulation1/Option2';
import Option1a from './Simulation1/Option1a';
import Option1a1 from './Simulation1/Option1a1';
import Option1a1a from './Simulation1/Option1a1a';
import Option1a2 from './Simulation1/Option1a2';
import Option1a2a from './Simulation1/Option1a2a';
import Option1b from './Simulation1/Option1b';
import Option1b1 from './Simulation1/Option1b1';
import Option1b1b from './Simulation1/Option1b1b';
import Option1b2 from './Simulation1/Option1b2';
import Option1b2b from './Simulation1/Option1b2b';
import { FactHome } from "./Components/FactHome.js";



function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
		  <Route path='/simulations' exact component={SimulationHome} />
      <Route path='/Simulation1' exact component={Head} />
      <Route path='/Simulation1/Option1' exact component={Option1} />
      <Route path='/Simulation1/Option2' exact component={Option2} />
      <Route path='/Simulation1/Option1a' exact component={Option1a} />
      <Route path='/Simulation1/Option1a1' exact component={Option1a1} />
      <Route path='/Simulation1/Option1a1a' exact component={Option1a1a} />
      <Route path='/Simulation1/Option1a2' exact component={Option1a2} />
      <Route path='/Simulation1/Option1a2a' exact component={Option1a2a} />
      <Route path='/Simulation1/Option1b' exact component={Option1b} />
      <Route path='/Simulation1/Option1b1' exact component={Option1b1} />
      <Route path='/Simulation1/Option1b1b' exact component={Option1b1b} />
      <Route path='/Simulation1/Option1b2' exact component={Option1b2} />
      <Route path='/Simulation1/Option1b2b' exact component={Option1b2b} />
		  <Route path='/poverty-facts' exact component={FactHome}/>
        </Switch>
      </Router>
    </>

  );
}


export default App;