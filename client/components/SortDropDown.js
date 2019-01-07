import React from 'react'
import '../public/style/SortDropDown.css'
//Might be good to refactor so you map our div options
const SortDropDown = (props) => {
  let dropDownTag = props.sortBy ? props.sortBy : "Sort Results"
  return (
    <div className="ui selection simple dropdown sortDropDown">
    <input name="sortBy" />
    <i className="dropdown icon"></i>
    <div className="default text" >{dropDownTag}</div>
    <div className="menu">
      <div className="item"  onClick={props.handleClick}>Title</div>
      <div className="item"  onClick={props.handleClick}>Author</div>
      <div className="item"  onClick={props.handleClick}>Year</div>
    </div>
  </div>
  )
}

export default SortDropDown