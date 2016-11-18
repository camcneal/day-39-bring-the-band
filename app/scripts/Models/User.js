import Backbone from 'backbone';


export default Backbone.Model.extend({
    urlRoot: 'https://api.backendless.com/v1/users/register',
    defaults: {
      fullname: '',
      username: '',
      email: '',
      password: ''

    }


})
