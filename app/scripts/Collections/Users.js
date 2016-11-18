import Backbone from 'backbone';
import User from '../Models/User';


export default Backbone.Collection.extend({
    Model: User,
    url: 'https://api.backendless.com/v1/users/register',

    signup(fullname, username,email, password) {
        this.create({fullname, username,email, password}, {
          success: (response) => {
            console.log(response);
          }
        })
      }
});
