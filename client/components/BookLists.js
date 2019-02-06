import React from 'react'
import '../public/style/BookLists.css'

const BookLists = (props) => {
  return (
    <div className="ui items list-container">
      <div className="ui segment">
        <h1>{props.listType}</h1>
      </div>
      {props.list.map(item => {
        return ( 
          <div className="ui item single-item" key={item.id}>          
            <div className="image">
              <img src="openBook.jpg" />
            </div>
            <div className="content single-item">
              <a className="header">Title: {item.title}</a>
              <div className="meta single-item">
                <span>By: {item.author}</span>
              </div>
              <div className="extra single-item">
                Year: {item.publishYear}
              </div>
            </div>
          </div>         
        )
      })}
    </div>
  )
}


export default BookLists