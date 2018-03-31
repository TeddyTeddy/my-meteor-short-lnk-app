import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

class Signup extends React.Component {
  render() {
    return <p>Signup component here</p>;
  }
}

Meteor.startup(() => {
  ReactDOM.render(<Signup/>, document.getElementById('app'));
});
