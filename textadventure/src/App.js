import React from 'react';
import Navbar from './Components/NavBar';
import './App.css';
import Home from './Components/Home';
import { SimulationHome } from "./Components/SimulationHome.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FactHome } from "./Components/FactHome.js";
import { GlossaryHome } from "./Components/GlossaryHome.js";
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
import Option2a from './Simulation1/Option2a';
import Option2a1 from './Simulation1/Option2a1';
import Option2a1a from './Simulation1/Option2a1a';
import Option2a2 from './Simulation1/Option2a2';
import Option2a2a from './Simulation1/Option2a2a';
import Option2b from './Simulation1/Option2b';
import Option2b1 from './Simulation1/Option2b1';
import Option2b1b from './Simulation1/Option2b1b';
import Option2b2 from './Simulation1/Option2b2';
import Option2b2b from './Simulation1/Option2b2b';
import Head_2 from './Simulation2/Head';
import Option1_2 from './Simulation2/Option1';
import Option2_2 from './Simulation2/Option2';
import Option1a_2 from './Simulation2/Option1a';
import Option1a1_2 from './Simulation2/Option1a1';
import Option1a1a_2 from './Simulation2/Option1a1a';
import Option1a2_2 from './Simulation2/Option1a2';
import Option1a2a_2 from './Simulation2/Option1a2a';
import Option1b_2 from './Simulation2/Option1b';
import Option1b1_2 from './Simulation2/Option1b1';
import Option1b1b_2 from './Simulation2/Option1b1b';
import Option1b2_2 from './Simulation2/Option1b2';
import Option1b2b_2 from './Simulation2/Option1b2b';
import Option2a_2 from './Simulation2/Option2a';
import Option2a1_2 from './Simulation2/Option2a1';
import Option2a1a_2 from './Simulation2/Option2a1a';
import Option2a2_2 from './Simulation2/Option2a2';
import Option2a2a_2 from './Simulation2/Option2a2a';
import Option2b_2 from './Simulation2/Option2b';
import Option2b1_2 from './Simulation2/Option2b1';
import Option2b1b_2 from './Simulation2/Option2b1b';
import Option2b2_2 from './Simulation2/Option2b2';
import Option2b2b_2 from './Simulation2/Option2b2b';

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/simulations' exact component={SimulationHome} />
          <Route path='/poverty-facts' exact component={FactHome}/>
          <Route path='/poverty-facts/glossary' exact component={GlossaryHome}/>
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
          <Route path='/Simulation1/Option2a' exact component={Option2a} />
          <Route path='/Simulation1/Option2a1' exact component={Option2a1} />
          <Route path='/Simulation1/Option2a1a' exact component={Option2a1a} />
          <Route path='/Simulation1/Option2a2' exact component={Option2a2} />
          <Route path='/Simulation1/Option2a2a' exact component={Option2a2a} />
          <Route path='/Simulation1/Option2b' exact component={Option2b} />
          <Route path='/Simulation1/Option2b1' exact component={Option2b1} />
          <Route path='/Simulation1/Option2b1b' exact component={Option2b1b} />
          <Route path='/Simulation1/Option2b2' exact component={Option2b2} />
          <Route path='/Simulation1/Option2b2b' exact component={Option2b2b} />
          



          <Route path='/Simulation2' exact component={Head_2} />
          <Route path='/Simulation2/Option1' exact component={Option1_2} />
          <Route path='/Simulation2/Option2' exact component={Option2_2} />
          <Route path='/Simulation2/Option1a' exact component={Option1a_2} />
          <Route path='/Simulation2/Option1a1' exact component={Option1a1_2} />
          <Route path='/Simulation2/Option1a1a' exact component={Option1a1a_2} />
          <Route path='/Simulation2/Option1a2' exact component={Option1a2_2} />
          <Route path='/Simulation2/Option1a2a' exact component={Option1a2a_2} />
          <Route path='/Simulation2/Option1b' exact component={Option1b_2} />
          <Route path='/Simulation2/Option1b1' exact component={Option1b1_2} />
          <Route path='/Simulation2/Option1b1b' exact component={Option1b1b_2} />
          <Route path='/Simulation2/Option1b2' exact component={Option1b2_2} />
          <Route path='/Simulation2/Option1b2b' exact component={Option1b2b_2} />
          <Route path='/Simulation2/Option2a' exact component={Option2a_2} />
          <Route path='/Simulation2/Option2a1' exact component={Option2a1_2} />
          <Route path='/Simulation2/Option2a1a' exact component={Option2a1a_2} />
          <Route path='/Simulation2/Option2a2' exact component={Option2a2_2} />
          <Route path='/Simulation2/Option2a2a' exact component={Option2a2a_2} />
          <Route path='/Simulation2/Option2b' exact component={Option2b_2} />
          <Route path='/Simulation2/Option2b1' exact component={Option2b1_2} />
          <Route path='/Simulation2/Option2b1b' exact component={Option2b1b_2} />
          <Route path='/Simulation2/Option2b2' exact component={Option2b2_2} />
          <Route path='/Simulation2/Option2b2b' exact component={Option2b2b_2} />
        </Switch>
      </Router>
    </>

  );
}


export default App;