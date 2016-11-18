import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Login from './Components/Login';
import SignUp from './Components/Signup';


export default(

  <Router history = {hashHistory}>
      <Route path='/' component={Login} />
      <Route path='/signup' component={SignUp} />
  </Router>
);
