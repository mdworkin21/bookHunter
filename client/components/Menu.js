import React, {Component} from 'react'
import '../public/style/Menu.css'
import {Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { removeUser } from '../redux/thunks/users'

class Menu extends Component  {
  state = {
    redirect: false,
    path: ''
  }

  handleClick = (event) => {
    let path
    switch(event.currentTarget.textContent){
      case 'Home':
        path = '/'
        break;
      case 'Sign Up/Log In':
        path= '/signup'
        break;
      case 'Log Out':
        this.props.deleteUser()
        path = '/'
      default:
        path = '/'
    }
    this.setState({
      path: path
    })
  }

  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.state.path){
     this.setState({
       redirect: true
    })
    }
  }

  render(){
    console.log('PROPS',this.props.location)
    return this.state.redirect ? <Redirect to={{pathname: this.state.path, state: {from: this.props.location}}}/> : (
      <div className="ui vertical menu" id="menu-container">
        <h1>Book Hunter</h1>     
          <div className="menu-links" onClick={this.handleClick}>Home</div>
          <div className="menu-links" onClick={this.handleClick}>Sign Up/Log In</div>
          <div className="menu-links" onClick={this.handleClick}>Log Out</div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: () => dispatch(removeUser())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))