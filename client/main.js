import { Meteor } from 'meteor/meteor';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {Tracker} from 'meteor/tracker';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/links" component={Link}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

Tracker.autorun(()=> {
  const isAuthenticated = !!Meteor.userId();
  const pathname =  browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAutenticatedPage = authenticatedPages.includes(pathname);

  // if on unauthenticated page and logged in, redirect to /links page via
  // browserHistory.push()
  if(isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/links');
  }

  // if on an authenticated page, and not logged in, redirect to '/' page via
  // browserHistory.push()
  if(isAutenticatedPage && !isAuthenticated) {
    browserHistory.push('/');
  }
  // No else

});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
