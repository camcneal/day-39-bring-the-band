import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import config from './config';
import $ from 'jquery';
import Search from './Components/Search';
import Vote from './Components/Votes';

$(document).ajaxSend((evt, xhr, opts) => {
  if(opts.url.indexOf('spotify')===-1){
    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secret);
    xhr.setRequestHeader('application-type', 'REST');
    if (window.localStorage.getItem('user-token')) {
      console.log('loggedin');
      xhr.setRequestHeader('user-token', window.localStorage.getItem('user-token'));
    }
  }

});


export default(

  <Router history = {hashHistory}>
      <Route path='/' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/search' component={Search} />
      <Route path='/votes'   component={Vote}   />
  </Router>
);
