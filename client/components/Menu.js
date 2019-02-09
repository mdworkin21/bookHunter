import React, {Component} from 'react'
import {Redirect, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { removeUser } from '../redux/thunks/users'
import '../public/style/Menu.css'

class Menu extends Component  {
  handleClick = (event) => {
    this.props.deleteUser()
    return <Redirect to='/' />
  }

  menuList(){
    if (!this.props.user.userName){
      return (
        <React.Fragment>
          <NavLink to='/' id="menu-links">Home</NavLink>
            <br/>
         <NavLink to='/signup' id="menu-links">Sign Up/ Log In</NavLink>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h2>Welcome, {this.props.user.userName}</h2>
          <NavLink to='/' id="menu-links">Home</NavLink>
          <br/> 
          <NavLink to='/profile' id="menu-links">Profile</NavLink>
          <div id="menu-links" onClick={this.handleClick}>Log Out</div>
        </React.Fragment>
      )
    }
  }

 
  render(){
    let menuDisplay = this.menuList()
    return (
      <div className="ui vertical menu" id="menu-container">
        <h1>Book Hunter</h1>  
          {menuDisplay}
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: () => dispatch(removeUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)