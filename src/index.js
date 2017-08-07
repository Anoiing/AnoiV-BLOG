require('normalize.css/normalize.css');
require('styles/App.scss');
import 'semantic-ui-css/semantic.min.css';
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
import AppIndex from './components/AppIndex';
import NotMatch from './components/NotMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Router配置
ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={AppIndex} />
      <Route component={NotMatch} />
    </Switch>
  </Router>
), document.getElementById('app'));
