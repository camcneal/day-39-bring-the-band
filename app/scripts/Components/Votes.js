import React from 'react';
import store from '../store';
import Vote from './Vote';


export default React.createClass({
  getInitialState() {
    return {}
  },

  componentDidMount() {
    store.votes.on('update', this.updateState)
    store.votes.fetch();
  },

  updateState() {
    console.log(store.votes.models[0].attributes.data);
    this.setState({data: store.votes.models[0].attributes.data})
  },

    render () {

      return (
        <div>
        <h2>Votes</h2>
        <Vote />
        </div>
      )
    }
})
