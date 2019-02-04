import React, {Component} from 'react'
import Menu from './Menu'
import '../public/style/Profile.css'
import { connect } from 'react-redux';

class Profile extends Component {
  render(){
    return (
    <React.Fragment>
      <Menu/>
      <div className="ui huge header">Profile</div>
      <div className="ui segments" id="user-info-container">
        <div className="ui segment">
          <p>User Name: {this.props.user.userName} </p>
        </div>
        <div className="ui segment">
          <p>Email: {this.props.user.email} </p>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>  {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Profile)