import React from 'react'
import SortDropDown from './SortDropDown';
import Button from './Button'

const AdvancedSearch = (props) => {
  return (
    <div className="ui segment">
      <form className="ui form searchBar" onSubmit={props.handleSubmit}>
        <div className="field">
          <label>Advanced Search</label>
          <input type="text" name="title" placeholder="Book Title" value={props.searchValTitle} onChange={props.handleChange}/>
          <input type="text" name="author" placeholder="Author" value={props.searchValAuthor} onChange={props.handleChange}/>
          <input type="text" name="year" placeholder="Year" value={props.searchValYear} onChange={props.handleChange}/>
          <div className="dropDownContainer">
            <SortDropDown handleClick={(event) => props.handleClick(event)} sortBy={props.sortBy}/>
          </div>
        </div>
      </form>
      <Button buttonName="Close" clickEvent={(event) => props.handleAdvancedOption(event)}/>
    </div>
  ) 
}

export default AdvancedSearch  