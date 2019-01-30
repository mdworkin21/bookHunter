import React, {Component} from 'react'
import { createNewUser } from '../redux/thunks/users'
import {connect} from 'react-redux'
import regeneratorRuntime, { async } from "regenerator-runtime";
import '../public/style/SignUp.css'


class SignUp extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    repassword: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

   handleSubmit = async (event) =>{
    event.preventDefault()
    try{
     await this.props.createUser({
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password
      })
      this.setState({
        userName: '',
        email: '',
        password: '',
        repassword: ''
      }) 
    } catch(err){
        console.log(err)
    }  
  }

  //Just a draft of styling
  render(){
    // return(
    //   <form className="ui form" onSubmit={this.handleSubmit}>
    //     <div className="field">
    //       <label>Name</label>
    //       <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
    //     </div>
    //     <div className="field">
    //       <label>Email</label>
    //       <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
    //     </div>
    //     <div className="field">
    //       <label>Password</label>
    //       <input type="text" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
    //     </div>
    //     <button className="ui button" type="submit">Submit</button>
    //   </form>
    // )
    return(
      <div id="login-box">
        <div className="left-box" onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <input type="text" name="userName" placeholder="Username" onChange={this.handleChange} value={this.state.userName} />
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
          <input type="password" name="repassword" placeholder="Retype Password" onChange={this.handleChange} value={this.state.repassword} />
          <input type="submit" name="signup-btn" value="Sign Up" onClick={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createNewUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)