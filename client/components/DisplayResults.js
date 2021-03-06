import React, {Component} from 'react'
import { connect } from 'react-redux'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios';
import '../public/style/DisplayResults.css'
import {Link} from 'react-router-dom'
import PaginateBtn from './PaginateBtn';
import Image from 'react-image-resizer'
import AddBtns from './AddToListBtns';

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
 
  findMatch(el, arr){
   return arr.find(element => {
      let isbn = el.isbn ? el.isbn[0] : ''
      return isbn === element.isbn
    })
  }
  
  render(){
  let results = this.props.results.results
  let currentResults = results.slice(this.state.start, this.state.end)
  let prevVis = this.state.start - 1 < 0 ? 'hidden' : 'visible'
  let nextVis = this.state.end + 1 > results.length ? 'hidden' : 'visible'
  
  return (
    <React.Fragment>
    <div className="ui grid stackable"> 
    {currentResults.map((el, index) =>{
      let red = this.findMatch(el, this.props.favorites) ? 'red' : ''
      let green = this.findMatch(el, this.props.willRead) ? 'green' : ''
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
            <Link to={`/details/${index}`} className="header">   {el.title_suggest}</Link>
            <p>{el.subtitle}</p>
            <div className="meta">
              <span className="date">By: {el.author_name}</span>
            </div>
            <div className="description">Published: {el.first_publish_year}</div>
          </div>
          <AddBtns book={el} favColor={red} willReadColor={green}/>
        </div>
        )
      })}
      <i className="huge chevron left icon" id="left-arrow" onClick={() => this.handleClick('prev')} style={{visibility: prevVis}}></i>
      <i className="huge chevron right icon" id="right-arrow" onClick={() => this.handleClick('next')} style={{visibility: nextVis}}></i>
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
    user: state.user.user,
    favorites: state.user.favorites,
    willRead: state.user.willRead
  }
}

export default connect(mapStateToProps)(DisplayResults)