import React, {Component} from 'react'
import {connect} from 'react-redux'
import Title from './Title'
import '../public/style/SingleView.css'
import {Redirect} from 'react-router-dom'

const SingleView = (props) => {
  const book = props.state.results[`${parseInt(props.match.params.id)}`]
  const isbnNum = book.isbn ? book.isbn[0] : ""
  const displayImage = isbnNum === "" ? "openBook.jpg" :
      `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
  const opening = book.hasOwnProperty('first_sentence') ? book.first_sentence : 'Sorry, Unvailable' 
  return (
    <React.Fragment>
      <Title/>
    <div className="ui items single-view-container">
      <div className="item">
        <div className="image">
          <img src={displayImage} />
        </div>
        <div className="content" id="single-view-content">
          <a className="header">{book.title_suggest}</a>
          <div className="description">
            <p>By: {book.author_name}</p>
          </div>
          <div className="meta">
            <span>Opening:</span> <p><em>{opening}</em></p>
          </div>
          <div className="extra">
          <p>Publish: {book.first_publish_year}</p>
          <p>ISBN: {isbnNum}</p>
          <p>Number of Editions: {book.edition_count}</p>
         </div>
        </div>
    </div>
  </div>
  </React.Fragment>
    )
  }


const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(SingleView)