import React, {Component} from 'react'
import { createNewUser } from '../redux/store'
import {connect} from 'react-redux'
import regeneratorRuntime, { async } from "regenerator-runtime";



class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: ''
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
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      this.setState({
        name: '',
        email: '',
        password: ''
      }) 
    } catch(err){
        console.log(err)
    }  
  }

  //Just a draft of styling
  render(){
    return(
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createNewUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)