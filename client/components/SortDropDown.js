import React from 'react'

const SortDropDown = (props) => {
  return (
    <div className="ui selection simple dropdown ">
    <input name="sortBy" />
    <i className="dropdown icon"></i>
    <div className="default text">Sort Results</div>
    <div className="menu">
      <div className="item" onClick={props.handleClick} data-value="0">Title</div>
      <div className="item" onClick={props.handleClick} data-value="1">Author</div>
      <div className="item" onClick={props.handleClick} data-value="2">Year</div>
    </div>
  </div>
  )
}

export default SortDropDown