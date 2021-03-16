import React from 'react';
import Navbar from './Components/NavBar';
import './App.css';
import Home from './Components/Home';
import { SimulationHome } from "./Components/SimulationHome.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
		  <Route path='/simulations' exact component={SimulationHome} />
        </Switch>
      </Router>
    </>

  );
}


export default App;