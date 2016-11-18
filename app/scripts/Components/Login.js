import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import {Link} from 'react-router';
// import SignUp from './Signup';

export default React.createClass({


  render () {
    return (
        <div className="login-wrapper">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Password" />
            <input type="submit" value="Log in" />
            Need an account? <Link to="/signup">SignUp Here!</Link>
            </form>
        </div>);
  },
});
