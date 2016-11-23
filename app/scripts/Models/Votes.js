import Backbone from 'backbone';
import config from '../config';
import {hashHistory} from 'react-router';

export default Backbone.Model.extend({
    urlRoot: 'https://api.backendless.com/v1/data/votes',
    idAttribute: 'id',
    defaults: {
      votes: ''
    },
    
});
