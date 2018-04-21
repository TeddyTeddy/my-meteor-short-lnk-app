import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
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
      Accounts.createUser({email, password}, (err) => {
        console.log('Signup callback:', err);
      });
      // this.setState({
      //  text: 'Something went wrong'
      // });
  }

  render() {
    return (
      <div>
        <h1>Signup to Short Lnk</h1>
        {this.state.text ? <p>{this.state.text}</p> : undefined}
        <form>
            <input type='email' ref='email' name='email' placeholder='Email'></input>
            <input type='password' ref='password' name='password' placeholder='Password'></input>
            <button onClick={this.onSubmit.bind(this)}>Signup</button>
        </form>
        <Link to='/'>Already have an account? Login here</Link>
      </div>
    );
  }
}
