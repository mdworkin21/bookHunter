import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../public/style/AddBtn.css'//Try Add icons as content of buttons to get effects like you want
//Styling needs work

class AddBtns extends Component {
  state = {
    favored: false,
    willRead: false
  }

  handleClick = () => {
    if(event.srcElement.id === 'heart-icon'){
      this.setState({
        favored: !this.state.favored
      })
   } else if (event.srcElement.id === 'book-icon'){
    this.setState({
      willRead: !this.state.willRead
    })
   }
  }

  render(){
  let btnVisibility = this.props.user.id ? 'visible' : 'hidden'
  let red = this.state.favored ? 'red' : '' 
  let green = this.state.willRead ? 'green' : ''
  return (
    <div className="add-btn-container" style={{visibility: btnVisibility}}>
      <button className="add-btn" onClick={() => {
        this.props.addToList(this.props.book)
        this.handleClick()
        }}>
        <i className={`${red} big heart outline icon add-btn-content`} id="heart-icon"></i>
      </button>
      <button className="add-btn" id="book"onClick={() => {
          this.props.addToList(this.props.book)
          this.handleClick()
          }
        }> 
        <i className={`${green} big book icon add-btn-content`}id="book-icon"></i>
      </button>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(AddBtns)