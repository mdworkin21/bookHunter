import {GET_USER, NEW_USER, DELETE_USER, FAVORITE_BOOKS_LIST, WILL_READ_LIST, GET_USER_FAIL, ADD_TO_FAV, ADD_TO_WILL_READ, DELETE_FROM_FAV, DELETE_FROM_WILL_READ} from '../actions/users'

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
    case ADD_TO_FAV: 
      return {...state, favorites: [...state.favorites, action.book]}
    case ADD_TO_WILL_READ:
      return {...state, willRead: [...state.willRead, action.book]}
    case DELETE_FROM_FAV:
      let filteredFav = state.favorites.filter(el => {
        if (el.id !== action.book.id){
          return el 
        }
      }) 
      return {...state, favorites: filteredFav}
    case DELETE_FROM_WILL_READ: 
      let filteredWilLRead = state.willRead.filter(el => {
        if (el.id !== action.book.id){
          return el 
        }
      }) 
      return {...state, willRead: filteredWilLRead}
    default:
      return state
  }
}