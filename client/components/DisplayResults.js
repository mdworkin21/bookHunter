import React from 'react'

const DisplayResults = (props) => {
  return (
    props.results.map((el, index) =>{
      let isbnNum = el.isbn ? el.isbn[0] : ""
      let displayImage = isbnNum === "" ? "openBook.jpg" :
      `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
      return(
      <div className="ui card displayResults" key={index} style={{marginLeft:'2em'}}>
        <div className="image">
          <img src={displayImage}/>
        </div>
        <div className="content" style={{backgroundColor: '#f0ead6'}}>
          <a className="header">{el.title_suggest}</a>
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

export default DisplayResults