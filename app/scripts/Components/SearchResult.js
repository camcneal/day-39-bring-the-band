import React from 'react';
import store from '../store';
import {hashHistory} from 'react-router';


export default React.createClass({
  handleVote (e) {
  store.votes.create({
    name: this.props.artist.name,
    image: this.props.image,
}, {

    success: (response) => {
    hashHistory.push('votes')

      }
    })
  },


  render () {

    return (
      <li>

      <img src={this.props.image}/>
      <p>{this.props.artist.name}</p>
      <label>VOTE<input onClick={this.handleVote} ref="vote" type="checkbox"/> </label>
      </li>
    )
  }
});
