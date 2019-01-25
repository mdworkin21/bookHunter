import React from 'react'
import '../public/style/Menu.css'
import SignUp from './SignUp';

const Menu = () => {
  return (
    <div className="ui vertical menu" id="menu-container">
      <h1>Book Hunter</h1>
      <SignUp />
    </div>
  )
}

export default Menu