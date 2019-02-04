import React, {Component} from 'react'
import { connect } from 'react-redux'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios';
import '../public/style/DisplayResults.css'
import {Link} from 'react-router-dom'
import PaginateBtn from './PaginateBtn';
import Image from 'react-image-resizer'
import AddBtns from './AddToListBtns';

//REMEMBER TO ALTER DISPLAY OF BUTTONS IF USER NOT SIGNED IN
class DisplayResults extends Component {
  state = {
    start: 0,
    end: 10
  }

  handleClick = (direction) => {
    if (direction === 'next'){
      this.setState({
        start: this.state.end,
        end: this.state.end + 10
      })
    } else if (direction === 'prev'){
      this.setState({
        start: this.state.start - 10,
        end: this.state.end - 10
      })
    }
  }

  handleAddToList = async (book) => {
    const bookToSave = {
      title: book.title_suggest,
      author: book.author_name[0],
      publishYear: book.first_publish_year,
      isbn: book.isbn[0],
      edition: book.edition_key[0],
      cover_i: book.cover_i
    }
    
    if (event.srcElement.id === 'heart-icon'){
      try{
        let addedBook = await axios.post('/api/addbooks/addbook', bookToSave)
        let bookId = addedBook.data[0].id
        let userId = this.props.user.id
        let addedFavorite = await axios.post('/api/addbooks/addToFavorites', {bookId, userId})
      }catch(err){
        console.log(err)
      }
    } else if (event.srcElement.id === 'book-icon'){
      try{
        let addedBook = await axios.post('/api/addbooks/addbook', bookToSave)
        let bookId = addedBook.data[0].id
        let userId = this.props.user.id
        let addedFavorite = await axios.post('/api/addbooks/willRead', {bookId, userId})
      }catch(err){
        console.log(err)
      }
    }
  }

  render(){
  let results = this.props.results.results
  let currentResults = results.slice(this.state.start, this.state.end)
  return (
    <React.Fragment>
    <div className="ui grid stackable"> 
    {currentResults.map((el, index) =>{
      let isbnNum = el.isbn ? el.isbn[0] : ""
      let displayImage = isbnNum === "" ? "openBook.jpg" :
      `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
      
      return(
        <div className="ui card" id='display-results-container' key={index}>
          <div className="image" id="child-image">
            <Image 
                src={displayImage}
                height={160}
                width={140}
                style={style.image}/>
          </div>
          <div className="content" id="child-content">
            <Link to={`/details/${index}`} className="header">{el.title_suggest}</Link>
            <p>{el.subtitle}</p>
            <div className="meta">
              <span className="date">By: {el.author_name}</span>
            </div>
            <div className="description">Published: {el.first_publish_year}</div>
          </div>
          <AddBtns addToList={this.handleAddToList} book={el}/>
        </div>
        )
      })}
      <i className="huge chevron left icon" id="left-arrow" onClick={() => this.handleClick('prev')}></i>
      <i className="huge chevron right icon" id="right-arrow" onClick={() => this.handleClick('next')}></i>
      </div>
    </React.Fragment>
   )
  }
}

const style = {
  image: {
    position: 'relative',
    top: '0px',
    margin: '0 auto',
    padding: '0'
  }
}


const mapStateToProps = (state) => {
  return {
    results: state.results,
    user: state.user.user
  }
}

export default connect(mapStateToProps)(DisplayResults)