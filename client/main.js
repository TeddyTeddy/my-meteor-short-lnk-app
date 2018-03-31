import { Meteor } from 'meteor/meteor';
import Signup from '../imports/ui/signup'
import ReactDOM from 'react-dom';
import React from 'react';

Meteor.startup(() => {
  ReactDOM.render(<Signup/>, document.getElementById('app'));
});
