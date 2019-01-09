import React from 'react'
import { connect } from 'react-redux'
import '../public/style/DisplayResults.css'
import {Link} from 'react-router-dom'

const DisplayResults = (props) => {
  console.log('DISPLAY', props.state.results)
  let results = props.state.results
  return (
    results.map((el, index) =>{
      let isbnNum = el.isbn ? el.isbn[0] : ""
      let displayImage = isbnNum === "" ? "openBook.jpg" :
      `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
      return(
        <div onClick={() => console.log('HELLO', el.title_suggest, el.author_name, index)}className="ui card" id="display-results-container" key={index}>
          <div className="image display-results-child" id="child-image">
            <img src={displayImage}/>
          </div>
          <div className="content" id="child-content">
            <Link to={`/details/${index}`} className="header">{el.title_suggest}</Link>
            <p>{el.subtitle}</p>
            <div className="meta">
              <span className="date">By: {el.author_name}</span>
            </div>
            <div className="description">
              Published: {el.first_publish_year}
            </div>
          </div>
        </div>
      )
    })
  )
}


const mapStateToProps = (state) => {
  console.log('MAP', state)
  return {state}
}


export default connect(mapStateToProps)(DisplayResults)