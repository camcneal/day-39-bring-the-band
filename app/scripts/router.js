import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import config from './config';
import $ from 'jquery';

$(document).ajaxSend((evt, xhr, opts) => {
    console.log(config.appId);

    // xhr is the raw ajax request, and we can modify it to make changes, like this example that sets headers:
    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secret);
    xhr.setRequestHeader('application-type', 'REST');
    if (window.localStorage.getItem('user-token')) {
      console.log('loggedin');
    	xhr.setRequestHeader('user-token', window.localStorage.getItem('user-token'));
    }
});


export default(

  <Router history = {hashHistory}>
      <Route path='/' component={Login} />
      <Route path='/signup' component={SignUp} />
  </Router>
);
