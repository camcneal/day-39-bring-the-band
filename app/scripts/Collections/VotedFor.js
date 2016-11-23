import Backbone from 'backbone';
import Votes from '../Models/Votes';
import {hashHistory} from 'react-router';


export default Backbone.Collection.extend({
    Model: Votes,
    url: 'https://api.backendless.com/v1/data/votes',

    search(votes) {
      this.fetch({
        data: {
          artist: artist,
          image: image
        }
      })
    }
});
