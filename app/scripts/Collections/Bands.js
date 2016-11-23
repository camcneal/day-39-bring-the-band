import Backbone from 'backbone';
import Band from '../Models/Band';

export default Backbone.Collection.extend({
    Model: Band,
    url: 'https://api.spotify.com/v1/search',

    search(artist) {
        this.fetch({
            data: {
                q: artist,
                type: 'artist'

            },
            success: (response) => {
              // console.log(response.models[0].get('artists').items);
              // this.add(response.models[0].get('artists').items)

            }
        })
    }
})
