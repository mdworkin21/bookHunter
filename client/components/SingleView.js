import React, {Component} from 'react'
import {connect} from 'react-redux'

const SingleView = (props) => {
  const book = props.state.results[`${parseInt(props.match.params.id)}`]
  const isbnNum = book.isbn ? book.isbn[0] : ""
  const displayImage = isbnNum === "" ? "openBook.jpg" :
      `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
  const opening = book.hasOwnProperty('first_sentence') ? book.first_sentence : 'Sorry, Unvailable' 
  return (
    <div class="ui items" style={{backgroundColor: 'white'}}>
      <div class="item">
        <div class="image">
          <img src={displayImage} />
        </div>
        <div class="content">
          <a class="header">{book.title_suggest}</a>
          <div class="description">
            <p>By: {book.author_name}</p>
          </div>
          <div class="meta">
            <span>Opening:</span> <p><em>{opening}</em></p>
          </div>
          <div class="extra">
          <p>Publish: {book.first_publish_year}</p>
          <p>ISBN: {isbnNum}</p>
          <p>Number of Editions: {book.edition_count}</p>
         </div>
        </div>
  </div>
  </div>
    )
  }


const mapStateToProps = (state) => {
  console.log('MAP', state)
  return {state}
}



export default connect(mapStateToProps)(SingleView)