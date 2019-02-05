import React from 'react'
import '../public/style/BookLists.css'

const BookLists = (props) => {
  return (
    <div className="ui segments list-container">
      <div className="ui segment">
        <h1>{props.listType}</h1>
      </div>
      {props.list.map(item => {
        return (
          <React.Fragment>
            <div className="ui segment">
              {item.id + '.' + ' '} 
              {item.title} 
            </div> 
          </React.Fragment>
        )
      })}
    </div>
  )
}


export default BookLists