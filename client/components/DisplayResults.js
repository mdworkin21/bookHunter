import React from 'react'
import '../public/style/DisplayResults.css'

const DisplayResults = (props) => {
  console.log('PROPS', props)
  return (
    props.results.map((el, index) =>{
      return(
      <div className="ui card" key={index} style={{marginLeft:'2em'}}>
        <div className="image">
          <img src="#" />
        </div>
        <div className="content">
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