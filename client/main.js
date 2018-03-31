import { Meteor } from 'meteor/meteor';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

const routes = (
  <Router history={browserHistory}>
    <Route path="/signup" component={Signup}/>
    <Route path="/links" component={Link}/>
  </Router>
);


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
