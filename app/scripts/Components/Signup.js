import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import {Link} from 'react-router';



export default React.createClass({

  render () {
    console.log('signup');
    return (
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="username" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log in" />
            Already a Member? <Link to="/">Login Here!</Link>
          </form>);
  },
});
