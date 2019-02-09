import React, {Component} from 'react'
import regeneratorRuntime, { async } from "regenerator-runtime";
import '../public/style/Profile.css'
import { connect } from 'react-redux';
import BookLists from './BookLists';
import { getUserFavorites, getUserWillReads } from '../redux/thunks/userLists';

class Profile extends Component {

  async componentDidMount(){
    await this.props.getFavorites(this.props.user.id)
    await this.props.getWillRead(this.props.user.id)
  }

  render(){
    return (
    <React.Fragment>
      <div className="ui huge header">Profile</div>
      <div className="ui segments" id="user-info-container">
        <div className="ui segment">
          <p>User Name: {this.props.user.userName} </p>
        </div>
        <div className="ui segment">
          <p>Email: {this.props.user.email} </p>
        </div>
      </div>
      <BookLists list={this.props.favorites} listType={'Favorite Reads'} />
      <BookLists list={this.props.willRead} listType={'On My To Read List'} />
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>  {
  return {
    user: state.user.user,
    favorites: state.user.favorites,
    willRead: state.user.willRead
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getFavorites: (id) => dispatch(getUserFavorites(id)),
    getWillRead: (id) => dispatch(getUserWillReads(id))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Profile)