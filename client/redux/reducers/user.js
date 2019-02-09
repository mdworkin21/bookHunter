import {GET_USER, NEW_USER, DELETE_USER, FAVORITE_BOOKS_LIST, WILL_READ_LIST, GET_USER_FAIL} from '../actions/users'

const initialState = {
  user: {},
  favorites: [],
  willRead: [],
  logInErr: false
}

export default function userReducer(state = initialState, action){
  switch(action.type){
    case GET_USER:
      return {...state, user: action.user}
    case GET_USER_FAIL:
      return {...state,  logInErr: true}
    case DELETE_USER: 
      return {...state, user: {}}
    case FAVORITE_BOOKS_LIST:
      return {...state, favorites: action.favList}
    case WILL_READ_LIST:
      return {...state, willRead: action.willRead}
    default:
      return state
  }
}