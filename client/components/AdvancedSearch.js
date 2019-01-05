import React from 'react'
import SearchBar from './SearchBar';

const AdvancedSearch = (props) => {
  return (
    <div className="ui segment">
    <form className="ui form searchBar" onSubmit={props.handleSubmit}>
      <div className="field">
        <label>AdvancedSearch</label>
        <input type="text" name="title" placeholder="Book Title" value={props.searchValue} onChange={props.handleChange}/>
        <input type="text" name="author" placeholder="Author" value={props.searchValue} onChange={props.handleChange}/>
      </div>
    </form>
  </div>
  )
}

export default AdvancedSearch