import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './components/AppIndex';
import NotMatch from './components/NotMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.scss';

// Router配置
ReactDOM.render((
  <Router history={history}>
    <Switch>
      <Route exact path="/AnoiV-BLOG/" component={AppIndex} />
      <Route component={NotMatch} />
    </Switch>
  </Router>
), document.getElementById('app'));
