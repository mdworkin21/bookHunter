import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
import '../public/style/AddBtn.css'
import { addToUserFavs, addToUserWillRead } from '../redux/thunks/userLists'
class AddBtns extends Component {
  //Register handleClick event, toggle between add or remove depending on whether book/heart is highlighted or not
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

  // handleRemoveFromList = (id, book) => {

  // }

    
  handleClick = (event) => {
    this.handleAddToList(event.target.id, this.props.book)
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
    addToWillRead: (book, user) => dispatch(addToUserWillRead(book, user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddBtns)