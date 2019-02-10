import React from 'react'
import {connect} from 'react-redux'
import {deleteFromUserFav, deleteFromUserWillRead} from '../redux/thunks/userLists'
import '../public/style/BookLists.css'

const BookLists = (props) => {
  console.log(props)
  return (
    
    <div className="ui items list-container">
      <div className="ui segment">
        <h1>{props.listType}</h1>
      </div>
      {props.list.map(item => {
        let favList = props.listType === 'Favorite Reads' ? 'visible' : 'hidden'
        let willRead = props.listType === 'On My To Read List' ? 'visible' : 'hidden'

        return ( 
          <div className="ui item single-item" key={item.id}>          
            <div className="image">
              <img src="openBook.jpg" />
            </div>
            <div className="content single-item">
              <a className="header">Title: {item.title}</a>
              <div className="meta single-item">
                <span>By: {item.author}</span>
              </div>
              <div className="extra single-item">
                Year: {item.publishYear}
              </div>
            </div>
            <button className="trash" style={{visibility: favList }} onClick={() => {props.deleteFromFav(props.user,item)}}>
              <i className="huge trash alternate icon"></i>
            </button>
            <button className="trash"style={{visibility: willRead }} onClick={() => {props.deleteFromWillRead(props.user,item)}}>
            <i className="huge trash alternate icon"></i>
            </button>
          </div>         
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    results: state.results,
    favorites: state.user.favorites,
    willRead: state.user.willRead
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFromFav: (userId, bookId) => dispatch(deleteFromUserFav(userId, bookId)),
    deleteFromWillRead: (userId, bookId) => dispatch(deleteFromUserWillRead(userId, bookId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookLists)