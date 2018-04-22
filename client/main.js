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
const onEnterPublicPage = () => {
    if(!!Meteor.userId()) {
      browserHistory.push('/links');
    }
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/links" component={Link}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

Tracker.autorun(()=> {
  const isAuthenticated = !!Meteor.userId();
  const pathname =  browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAutenticatedPage = authenticatedPages.includes(pathname);

  if(isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/links');
  }
  else if(isAutenticatedPage && !isAuthenticated) {
    browserHistory.push('/');
  }
  // No else

});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
