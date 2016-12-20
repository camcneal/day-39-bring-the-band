import React from 'react';
import store from '../store';
import Vote from './Vote';


export default React.createClass({
  getInitialState() {
    return { votes: []

    }
  },

  componentDidMount() {
    store.votes.on('update', this.updateState)
    store.votes.fetch();
  },

  updateState() {
    console.log(store.votes.models[0].attributes.data);
  this.setState({votes: store.votes.models[0].attributes.data});
  },

  componentWillUnmount() {
    store.vote.off('update', this.updateState)
  },

    render () {
let artists = this.state.votes.map((vote,i,arr)=> {
  return (<li key={i}>
          <img src={vote.image}/>
          <p>{vote.name}</p>
          </li>);
});
      return (
        <div>
        <h2>Votes</h2>
        <ul>{artists}</ul>
        </div>
      )
    }
})
