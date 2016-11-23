import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import SearchResults from './SearchResults';

export default React.createClass({
handleSubmit(e) {
  e.preventDefault()
  store.bands.search(this.refs.search.value)

},

  render () {
    return (
      <div className='search'>
        <form onSubmit={this.handleSubmit}>
        <input type="text" ref="search" placeholder="Search"/>
        <input type="submit" value="Search" />
        </form>
        <SearchResults />

      </div>
    )
  }
})
