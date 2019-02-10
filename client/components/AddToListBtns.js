import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
import '../public/style/AddBtn.css'
import { addToUserFavs, addToUserWillRead, deleteFromUserFav, deleteFromUserWillRead } from '../redux/thunks/userLists'

class AddBtns extends Component {
  handleAddToList = async (id, book) => {
    let isbn = book.isbn ? book.isbn[0] : '' 
    const bookToSave = {
      title: book.title_suggest,
      author: book.author_name[0],
      publishYear: book.first_publish_year,
      isbn: isbn,
      edition: book.edition_key[0],
      cover_i: book.cover_i
    }
    if (id === 'heart-icon'){
      try{
        await this.props.addToFav(bookToSave, this.props.user)
      }catch(err){
        console.log(err)
      }
    } else if (id === 'book-icon'){
        try{
          await this.props.addToWillRead(bookToSave, this.props.user)
        }catch(err){
          console.log(err)
        }
      }
   }

  handleRemoveFromList = async (user, book, typeOfList) => {
    let isbn = book.isbn ? book.isbn[0] : '' 
    const deleteBook = {
      title: book.title_suggest,
      author: book.author_name[0],
      publishYear: book.first_publish_year,
      isbn: isbn,
      edition: book.edition_key[0],
      cover_i: book.cover_i
    }
    try{
      if (typeOfList === 'red'){
        let bookToDelete = this.props.favorites.find(book => {
          return (
            deleteBook.title === book.title && 
            deleteBook.author === book.author &&
            deleteBook.publishYear === book.publishYear &&
            deleteBook.isbn === book.isbn
          )
        })  
        await this.props.deleteFavBook(user, bookToDelete)
      } else if (typeOfList === 'green'){
        let bookToDelete = this.props.willRead.find(book => {
          return (
            deleteBook.title === book.title && 
            deleteBook.author === book.author &&
            deleteBook.publishYear === book.publishYear &&
            deleteBook.isbn === book.isbn
          )
        })  
        await this.props.deleteWillRead(user, bookToDelete)
      }
    }catch(err){
      console.log(err)
    }
  }
    
  handleClick = (event) => {
    let firstClassName = event.target.className.split(' ')[0]
    let isColored = firstClassName === 'red' || firstClassName === 'green'
    if (!isColored){
      this.handleAddToList(event.target.id, this.props.book)
    } else {
      this.handleRemoveFromList(this.props.user, this.props.book, firstClassName)
    }
  }

  render(){
  let btnVisibility = this.props.user.id ? 'visible' : 'hidden'
  return (
    <div className="add-btn-container" style={{visibility: btnVisibility}}>
      <button className="add-btn" onClick={this.handleClick}>
        <i className={`${this.props.favColor} big heart outline icon add-btn-content`} id="heart-icon"></i>
      </button>
      <button className="add-btn" id="book" onClick={this.handleClick}> 
        <i className={`${this.props.willReadColor} big book icon add-btn-content`}id="book-icon"></i>
      </button>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    favorites: state.user.favorites,
    willRead: state.user.willRead
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFav: (book, user) => dispatch(addToUserFavs(book, user)),
    addToWillRead: (book, user) => dispatch(addToUserWillRead(book, user)),
    deleteFavBook: (user, book) => dispatch(deleteFromUserFav(user, book)),
    deleteWillRead: (user, book) => dispatch(deleteFromUserWillRead(user, book))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddBtns)