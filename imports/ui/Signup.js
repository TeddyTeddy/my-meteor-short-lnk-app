import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onSubmit(e) {
      e.preventDefault();
      this.setState({
        text: 'Something went wrong'
      });
  }

  render() {
    return (
      <div>
        <h1>Signup to Short Lnk</h1>
        <p>Sign up form here</p>

        {this.state.text ? <p>{this.state.text}</p> : undefined}
        <form>
            <input type='email' name='email' placeholder='Email'></input>
            <input type='password' name='password' placeholder='Password'></input>
            <button onClick={this.onSubmit.bind(this)}>Signup</button>
        </form>
        <Link to='/'>Already have an account? Login here</Link>
      </div>
    );
  }
}
