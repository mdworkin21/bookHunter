import React, {Component} from 'react'
import { createNewUser, logInUser } from '../redux/thunks/users'
import {connect} from 'react-redux'
import regeneratorRuntime, { async } from "regenerator-runtime";
import '../public/style/SignUp.css'
import {Redirect} from 'react-router-dom'
import Menu from './Menu'

class SignUp extends Component {
  //Needs to be fixed
  state = {
    userName: '',
    email: '',
    password: '',
    repassword: '',
    logInUserName: '',
    logInPassword: '',
    redirect: false
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

  componentDidUpdate(prevProps){
    if (this.props.user !== prevProps.user){
      this.handleRedirect()
    } 
  }

  handleRedirect = () => {
    this.setState({
      redirect: true
    })
  }

   handleLogin = async (event) => {
    event.preventDefault()

    try{
      await this.props.logInUser({
        userName: this.state.logInUserName,
        password: this.state.logInPassword
      })
    }catch(err){
     console.log(err.status)
      console.log(err)
    }
  }

  render(){
    return this.state.redirect ? <Redirect to='/' /> : (
      <React.Fragment>
        <Menu />
      <div id="login-box">
      <form  onSubmit={this.handleSubmit}>
        <div className="left-box">
          <h1>Sign Up</h1>
          <input type="text" name="userName" placeholder="Username" onChange={this.handleChange} value={this.state.userName} />
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
          <input type="password" name="repassword" placeholder="Retype Password" onChange={this.handleChange} value={this.state.repassword} />
          <input type="submit" name="signup-btn" value="Sign Up"/>
           <input type="submit" id="guest" value="Continue as Guest" onClick={this.handleRedirect}/>
        </div>
        </form>

        <form onSubmit={this.handleLogin}>
        <div className="right-box">
          <h1 id="loginTitle">Log In</h1>
          <input type="text" className="loginInput" name="logInUserName" placeholder="Username" onChange={this.handleChange} value={this.state.logInUserName} />
          <input type="password" className="loginInput" name="logInPassword" placeholder="Password" onChange={this.handleChange} value={this.state.logInPassword} />
          <input type="submit" className="loginBtn" name="login-in" value="Log In" />
        </div>
      </form>
      <div className='or'>Or</div>
      </div>
      </React.Fragment>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createNewUser(user)),
    logInUser: (user) => dispatch(logInUser(user))
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)