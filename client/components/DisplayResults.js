import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../public/style/DisplayResults.css'
import {Link} from 'react-router-dom'
import PaginateBtn from './PaginateBtn';

// const DisplayResults = (props) => {
//   let results = props.state.results
//   let start = 0
//   let end = start + 10
//   let currentResults = results.slice(start, end)
  
//   return (
//     <React.Fragment>
//     {currentResults.map((el, index) =>{
//       let isbnNum = el.isbn ? el.isbn[0] : ""
//       let displayImage = isbnNum === "" ? "openBook.jpg" :
//       `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
      
//       return(
//         <div className="ui card" id="display-results-container" key={index}>
//           <div className="image display-results-child" id="child-image">
//             <img src={displayImage}/>
//           </div>
//           <div className="content" id="child-content">
//             <Link to={`/details/${index}`} className="header">{el.title_suggest}</Link>
//             <p>{el.subtitle}</p>
//             <div className="meta">
//               <span className="date display-results-child">By: {el.author_name}</span>
//             </div>
//             <div className="description display-results-child">Published: {el.first_publish_year}</div>
//           </div>
//         </div>
//         )
//       })}
//     </React.Fragment>
//   )
// }


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



  render(){
  let results = this.props.state.results
  
  let currentResults = results.slice(this.state.start, this.state.end)
  
  return (
    <React.Fragment>
    {currentResults.map((el, index) =>{
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
      <i className="huge chevron left icon" onClick={() => this.handleClick('prev')}></i>
      <i className="huge chevron right icon" onClick={() => this.handleClick('next')}></i>
    </React.Fragment>
  )
    }
}

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(DisplayResults)