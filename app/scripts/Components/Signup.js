import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import {Link} from 'react-router';
import store from '../store';


export default React.createClass({

handleSubmit(e) {
    store.users.signup(this.refs.fullname.value,this.refs.username.value,this.refs.emailaddress.value,this.refs.password.value)
},

  render () {
    console.log('signup');
    return (
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="fullname" placeholder="Full Name" />
            <input type="text" ref="username" placeholder="username" />
            <input type="email" ref="emailaddress"  placeholder="Email Address" />
            <input type="password" ref="password" placeholder="Password" />
            <input type="submit" value="Log in" />
            Already a Member? <Link to="/">Login Here!</Link>
          </form>);
  },
});
