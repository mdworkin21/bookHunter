import React from 'react'

//Try Add icons as content of buttons to get effects like you want
//Styling needs work
const AddBtns = (props) => {
  return (
    <div className="add-btn-container">
      <button className="add-btn" onClick={() => props.addToList(props.book)}>
        <i className="big heart outline icon add-btn-content" id="heart-icon">Add to Favorites</i>
      </button>
      <button className="add-btn" onClick={() => props.addToList(props.book)}> 
        <i className="big book icon add-btn-content" id="book-icon">Add to Read List</i>
      </button>
    </div>
  )
}

export default AddBtns