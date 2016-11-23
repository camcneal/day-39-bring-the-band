import Backbone from 'backbone';
import User from '../Models/User';
import {hashHistory} from 'react-router';


export default Backbone.Collection.extend({
    Model: User,
    url: 'https://api.backendless.com/v1/users/register',

    signup(fullname, username,email, password) {
        this.create({fullname, username,email, password}, {
          success: (response) => {
            hashHistory.push('search')
            // console.log(response);
          }
        })
      }
});
