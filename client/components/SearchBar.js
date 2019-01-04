import React from 'react'
import '../public/style/SearchBar.css'

const SearchBar = (props) => {
  return (
    <div className="ui segment">
      <form className="ui form searchBar">
        <div className="field">
          <label>Book Search</label>
          <input type="text" />
        </div>
      </form>
    </div>
  )
}

export default SearchBar