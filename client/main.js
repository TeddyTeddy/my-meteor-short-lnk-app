import { Meteor } from 'meteor/meteor';
import Signup from '../imports/ui/signup';
import Link from '../imports/ui/link';
import ReactDOM from 'react-dom';
import React from 'react';

Meteor.startup(() => {
  ReactDOM.render(<Link/>, document.getElementById('app'));
});
