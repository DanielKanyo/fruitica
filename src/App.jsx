import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as routes from './constants/routes';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Route exact path={routes.HOME} component={() => <Home />} />
          <Route exact path={routes.CONTACT} component={() => <Contact />} />
        </div>
      </Router>
    );
  }
}

export default App;
