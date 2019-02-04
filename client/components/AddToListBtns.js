import React from 'react'


const AddBtns = (props) => {
  return (
    <div className="add-btn-container">
      <i className="big heart outline icon add-btn-content" id="heart-icon" onClick={() => props.addToList(props.book)}>Add to Favorites</i>
      <i className="big book icon add-btn-content" id="book-icon" onClick={() => props.addToList(props.book)}>Add to Read List</i>
    </div>
  )
}

export default AddBtns