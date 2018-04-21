import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onSubmit(e) {
      e.preventDefault();
      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();
      Meteor.loginWithPassword({email}, password, (err) => {
        console.log('Login callback', err);
      });
      // this.setState({
      //  text: 'Something went wrong'
      // });
  }

  render() {
    return (
      <div>
        <h1>Login to Short Lnk</h1>
        {this.state.text ? <p>{this.state.text}</p> : undefined}
        <form>
            <input type='email' ref='email' name='email' placeholder='Email'></input>
            <input type='password' ref='password' name='password' placeholder='Password'></input>
            <button onClick={this.onSubmit.bind(this)}>Login</button>
        </form>
        <Link to='/signup'>Have an account?</Link>
      </div>
    );
  }
}
