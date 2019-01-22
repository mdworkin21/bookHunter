import React, {Component} from 'react'
import {connect} from 'react-redux'
import Title from './Title'
import '../public/style/SingleView.css'
import {Redirect} from 'react-router-dom'
import App from './App'
import PaginateBtn from './PaginateBtn';

// const SingleView = (props) => {
//   //Looks at store to grab specific book, and displays results depending on what info exists 
//   const book = props.state.results[`${parseInt(props.match.params.id)}`]
//   const isbnNum = book.isbn ? book.isbn[0] : ""
//   const displayImage = isbnNum === "" ? "/openBook.jpg" : `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
//   const opening = book.hasOwnProperty('first_sentence') ? book.first_sentence : 'Sorry, Unvailable' 

//   return (
//       <React.Fragment>
//         <Title/>
//         <div className="ui items single-view-container">
//           <div className="item">
//             <div className="image">
//               <img src={displayImage} />
//             </div>
//             <div className="content" id="single-view-content">
//               <a className="header">{book.title_suggest}</a>
//               <div className="description">
//                 <p>By: {book.author_name}</p>
//               </div>
//               <div className="meta">
//                 <span>Opening:</span> <p><em>{opening}</em></p>
//               </div>
//               <div className="extra">
//                 <p>Publish: {book.first_publish_year}</p>
//                 <p>ISBN: {isbnNum}</p>
//                 <p>Number of Editions: {book.edition_count}</p>
//               </div>
//             </div>
//           </div>
//         </div>
          // <PaginateBtn /> 
//     </React.Fragment>
//     )
//   }

class SingleView extends Component {
  //Looks at store to grab specific book, and displays results depending on what info exists 

  render(){
    const book = this.props.state.results[`${parseInt(this.props.match.params.id)}`]
    const isbnNum = book.isbn ? book.isbn[0] : ""
    const displayImage = isbnNum === "" ? "/openBook.jpg" : `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
    const opening = book.hasOwnProperty('first_sentence') ? book.first_sentence : 'Sorry, Unvailable' 
    return (
        <React.Fragment>
          <Title/>
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
          </div>
          <PaginateBtn />
      </React.Fragment>
      )

   }
  }

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(SingleView)