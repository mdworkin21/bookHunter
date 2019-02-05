import React from 'react'

const BookLists = (props) => {
  return (
    <div className="ui segments">
      <div className="ui segment">
        <h1>{props.listType}</h1>
      </div>
      {props.list.map(item => {
        return (
            <div className="ui segment">{item.id} {item.title}</div> 
        )
      })}
    </div>
  )
}

export default BookLists