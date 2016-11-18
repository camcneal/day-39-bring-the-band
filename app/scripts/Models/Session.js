import Backbone from 'backbone';
import {hashHistory} from 'react-router';


export default Backbone.Model.extend({
  //react way to save to backbone
    urlRoot: 'https://api.backendless.com/v1/users/login',


  login: function (email, password) {
    this.save({login:email, password:password}, {
      success: (response) => {
        console.log(response);
        }
      })
    }


      // $.ajax({
      //   type:'POST',
      //   url: 'https://api.backendless.com/v1/users/login',
      //   data: JSON.stringify({fullname,username,email,password}),
      //   success: (response) => {
      //     console.log('hi');
      //
      //   },
      // });


});
