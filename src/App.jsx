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
import CompanyData from './components/About/CompanyData';
import Mission from './components/About/Mission';
import News from './components/About/News';
import Gallery from './components/About/Gallery';
import Competition1 from './components/About/Competition1';

import { dataHun } from './constants/languages/hun';
import { dataSrb } from './constants/languages/srb';
import { dataEng } from './constants/languages/eng';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languageObject: dataSrb
    }
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  /** change language object */
  changeLanguage(language) {
    switch (language) {
      case "SRB":
        this.setState({ languageObject: dataSrb });
        break;
      case "ENG":
        this.setState({ languageObject: dataEng });
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
              path={routes.COMPANYDATA}
              component={() => <CompanyData languageObjectProp={this.state.languageObject} />}
            />
            <Route
              exact
              path={routes.MISSION}
              component={() => <Mission languageObjectProp={this.state.languageObject} />}
            />
            <Route
              exact
              path={routes.NEWS}
              component={() => <News languageObjectProp={this.state.languageObject} />}
            />
            <Route
              exact
              path={routes.GALLERY}
              component={() => <Gallery languageObjectProp={this.state.languageObject} />}
            />
            <Route
              exact
              path={routes.COMETITION1}
              component={() => <Competition1 languageObjectProp={this.state.languageObject} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
