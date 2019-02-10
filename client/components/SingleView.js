import React, {Component} from 'react'
import {connect} from 'react-redux'
import PaginateBtn from './PaginateBtn';
import AddBtns from './AddToListBtns';
import '../public/style/SingleView.css'

const SingleView = (props) => {
  //Looks at store to grab specific book, and displays results depending on what info exists 
  const book = props.results.results[`${parseInt(props.match.params.id)}`]
  const isbnNum = book.isbn ? book.isbn[0] : ""
  const displayImage = isbnNum === "" ? "/openBook.jpg" : `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
  const opening = book.hasOwnProperty('first_sentence') ? book.first_sentence : 'Sorry, Unvailable' 

  //For Pagiation
  let nextBook = props.results.results[`${parseInt(props.match.params.id) + 1}`]
  let prevBook = props.results.results[`${parseInt(props.match.params.id) -  1}`]
  
  //Determines color to pass to addBtn Icons
  let red = props.favorites.find(fav => isbnNum === fav.isbn) ? 'red' : ''
  let green = props.willRead.find(fav => isbnNum === fav.isbn) ? 'green' : ''

  return ( 
    <React.Fragment>    
       <div className="main-div">
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
             <AddBtns book={book} favColor={red} willReadColor={green}/>
          </div>
          <PaginateBtn id='test' next={nextBook} prev={prevBook} id={parseInt(props.match.params.id)}/> 
    </div>
    </React.Fragment>
    )
  }


const mapStateToProps = (state) => {
  return {
    results: state.results,
    favorites: state.user.favorites,
    willRead: state.user.willRead
  }
}


export default connect(mapStateToProps)(SingleView)