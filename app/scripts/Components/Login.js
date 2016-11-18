import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import {Link} from 'react-router';
import store from '../store';
// import SignUp from './Signup';

export default React.createClass({
handleSubmit (e) {
  e.preventDefault()
  store.session.login(this.refs.email.value, this.refs.password.value)
},


  render () {
    return (
        <div className="login-wrapper">
          <form onSubmit={this.handleSubmit}>
            <input type="email" ref='email' placeholder="Email Address" />
            <input type="password" ref='password' placeholder="Password" />
            <input type="submit" value="Log in" />
            Need an account? <Link to="/signup">SignUp Here!</Link>
            </form>
        </div>);
  },
});
