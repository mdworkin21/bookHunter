import React from 'react'
import Button from './Button'
import '../public/style/SearchBar.css'

const SearchBar = (props) => {
  console.log(props)
  return (
    <div className="ui segment">
      <form className="ui form searchBar" onSubmit={props.handleSubmit}>
        <div className="field">
          <label>Enter Search Terms Below</label>
          <input type="text" name="term" value={props.searchValue} onChange={props.handleChange}/>
        </div>
      </form>
        <Button buttonName="Advanced Search" clickEvent={(event) => props.handleAdvancedOption(event)}/>
    </div> 
  )
}

export default SearchBar  