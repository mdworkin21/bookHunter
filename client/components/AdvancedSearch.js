import React from 'react'
import SortDropDown from './SortDropDown';
import Button from './Button'

const AdvancedSearch = (props) => {
  console.log(props)
  return (
    <div className="ui segment">
    <form className="ui form searchBar" onSubmit={props.handleSubmit}>
      <div className="field">
        <label>AdvancedSearch</label>
        <input type="text" name="title" placeholder="Book Title" value={props.searchValTitle} onChange={props.handleChange}/>
        <input type="text" name="author" placeholder="Author" value={props.searchValAuthor} onChange={props.handleChange}/>
        <SortDropDown />
      </div>
    </form>
    <Button buttonName="Close" clickEvent={(event) => props.handleAdvancedOption(event)}/>
  </div>
  ) 
}

export default AdvancedSearch  