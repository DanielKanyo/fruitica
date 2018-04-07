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
import About from './components/About/About';

import { dataHun } from './constants/languages/hun';
import { dataSrb } from './constants/languages/srb';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languageObject: dataHun
    }
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  /** change language object */
  changeLanguage(language) {
    switch (language) {
      case "SRB":
        this.setState({ languageObject: dataSrb });
        break;
      default:
        this.setState({ languageObject: dataHun });
        break;
    }
  }

  /** render */
  render() {
    return (
      <Router>
        <div className="App">

           <Navigation
            languageObjectProp={this.state.languageObject}
            changeLanguageProp={this.changeLanguage.bind(this)}
          />

          <div className="Content">
            <Route
              exact
              path={routes.HOME}
              component={() => <Home languageObjectProp={this.state.languageObject} />}
            />
            <Route
              exact
              path={routes.CONTACT}
              component={() => <Contact languageObjectProp={this.state.languageObject} />}
            />
            <Route
              exact
              path={routes.ABOUT}
              component={() => <About languageObjectProp={this.state.languageObject} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
