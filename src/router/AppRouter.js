import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../utils/history';

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      //Routes go here
    </Switch>
  </Router>
);

export default AppRouter;
