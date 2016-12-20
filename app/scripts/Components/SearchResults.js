import React from 'react';
import store from '../store';
import SearchResult from './SearchResult';

export default React.createClass({
getInitialState() {
  return {}
},

componentDidMount() {
  store.bands.on('update', this.updateState)
},

updateState() {
  this.setState({data: store.bands.models[0].get('artists').items})
},

  render () {
    console.log(store.bands);
    let artists;
if (this.state.data){
  artists =  this.state.data.map( (artist,i,arr)=> {
    let image = 'http://wfarm2.dataknet.com/static/resources/icons/set31/fd6fc277.png'
    if (artist.images[0]){
      image = artist.images[0].url
    }
    console.log(artist);
      return (
        <SearchResult key={i} image={image} artist={artist} />

      )
      })
}



    return (
      <div className='results'>
        <ul>{artists}</ul>
      </div>
    )
  }
});
