import React from 'react'
import { connect } from 'react-redux'
import '../public/style/DisplayResults.css'
import {Link} from 'react-router-dom'
import PaginateBtn from './PaginateBtn'

const DisplayResults = (props) => {
  let results = props.state.results
  console.log(results)
  return (
    <React.Fragment>
    {results.map((el, index) =>{
      let isbnNum = el.isbn ? el.isbn[0] : ""
      let displayImage = isbnNum === "" ? "openBook.jpg" :
      `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
      
      return(
        <div className="ui card" id="display-results-container" key={index}>
          <div className="image display-results-child" id="child-image">
            <img src={displayImage}/>
          </div>
          <div className="content" id="child-content">
            <Link to={`/details/${index}`} className="header">{el.title_suggest}</Link>
            <p>{el.subtitle}</p>
            <div className="meta">
              <span className="date display-results-child">By: {el.author_name}</span>
            </div>
            <div className="description display-results-child">Published: {el.first_publish_year}</div>
          </div>
        </div>
        )
      })}
      <PaginateBtn />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(DisplayResults)