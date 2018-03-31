import { Meteor } from 'meteor/meteor';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import ReactDOM from 'react-dom';
import React from 'react';

Meteor.startup(() => {
  ReactDOM.render(<Link/>, document.getElementById('app'));
});
