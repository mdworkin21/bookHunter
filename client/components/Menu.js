import React, {Component} from 'react'
import '../public/style/Menu.css'
import {Redirect, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { removeUser } from '../redux/thunks/users'

class Menu extends Component  {
  state = {
    redirect: false,
    path: ''
  }

  handleClick = (event) => {
    this.props.deleteUser()
    return <Redirect to='/' />
  }

  render(){
    return (
      <div className="ui vertical menu" id="menu-container">
        <h1>Book Hunter</h1>     
          <NavLink to='/' id="menu-links">Home</NavLink>
          <br/>
          <NavLink to='/signup' id="menu-links">Sign Up/ Log In</NavLink>
          <div id="menu-links" onClick={this.handleClick}>Log Out</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)