import Bakcbone form 'backbone';
import {hashHistory} from 'react-router';

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

export default Backbone.Model.extend({
    defaults; {
      username: '',
      email: '',
      'user-token': ''
    },
  signup(fullname, username,email, Password){
      $ajax({
        type:'POST',
        url: 'https://api.backendless.com/v1/users/login',
        data: JSON.stringify({fullname,username,email,password}),
        success: (response) => {
          console.log('hi');

        },
      });
  }

})
