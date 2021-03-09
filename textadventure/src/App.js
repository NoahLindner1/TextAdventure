import React from 'react';
import Navbar from './Components/NavBar';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>

  );
}
export default App;

