import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login to short Lnk</h1>
        <p>Login form here</p>
        <Link to='/signup'>Have an account?</Link>
      </div>
    );
  }
}
