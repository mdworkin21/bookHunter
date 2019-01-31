import React, {Component} from 'react'
import '../public/style/Menu.css'
import {Redirect} from 'react-router-dom'

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
      case 'Sign Up':
        path= '/signup'
        break;
      case 'Log In':
        path= 'signup'
        break;
      default:
        path = '/'
    }
    this.setState({
      redirect: true,
      path: path
    })
  }

  render(){
  return this.state.redirect ? <Redirect to={this.state.path}/> : (
    <div className="ui vertical menu" id="menu-container">
      <h1>Book Hunter</h1>     
        <div className="menu-links" onClick={this.handleClick}>Home</div>
        <div className="menu-links" onClick={this.handleClick}>Sign Up</div>
        <div className="menu-links" onClick={this.handleClick}>Log In</div>
      
    </div>
  )
  }
}

export default Menu