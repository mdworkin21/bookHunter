import {GET_BOOKS, SORT_BOOKS, NO_RESULTS, CLEAR} from '../actions/bookSearch'

//Initializes State
const initialState = {
  results: [],
  noResults: false,
  user: '' //Will be an ID num
}

export default function resultsReducer(state = initialState, action){
  switch(action.type){
    case GET_BOOKS:
      return {...state, results: action.books}
    case SORT_BOOKS:
      return {...state, results: action.books}
    case NO_RESULTS:
      return {...state, noResults: action.boolean}
    case CLEAR:
      return {...state, results: []}
      // case GET_USER:
      // return {...state, user: action.user.id}
    default: 
    return state
  }
}

