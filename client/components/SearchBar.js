import React from 'react'
import '../public/style/SearchBar.css'

const SearchBar = (props) => {
  return (
    <div className="ui segment">
      <form className="ui form searchBar" onSubmit={props.handleSubmit}>
        <div className="field">
          <label>Book Search</label>
          <input type="text" name="term" value={props.searchValue} onChange={props.handleChange}/>
        </div>
      </form>
    </div>
  )
}

export default SearchBar