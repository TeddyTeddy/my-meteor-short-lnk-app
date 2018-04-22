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
      browserHistory.replace('/links');
    }
};

const onEnterPrivatePage = () => {
    if(!Meteor.userId()) {
      browserHistory.replace('/');
    }
};

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

Tracker.autorun(()=> {
  const isAuthenticated = !!Meteor.userId();
  const pathname =  browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAutenticatedPage = authenticatedPages.includes(pathname);

  if(isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/links');
  }
  else if(isAutenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
  // No else

});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
