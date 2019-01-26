import {GET_USER, NEW_USER} from '../actions/users'

const initialState = {
  user: ''
}

export default function userReducer(state = initialState, action){
  switch(action.type){
    case GET_USER:
      return {...state, user: action.user.id}
    default:
      return state
  }
}