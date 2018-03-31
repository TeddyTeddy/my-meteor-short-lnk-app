import React from 'react';
import { browserHistory } from 'react-router';

export default class Link extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => browserHistory.push('/')}>Logout</button>
      </div>
    );

  }
}
