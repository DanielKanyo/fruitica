import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { config } from './constants/firebase';

firebase.initializeApp(config);

const Application = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
