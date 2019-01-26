import {ADVANCED_TOGGLE, LOADING, ERR} from '../actions/bookSearch'

const searchState = {
  advanced: false,
  loading: false,
  error: ''
}

export default function searchStateReducer(state = searchState, action){
  switch(action.type){
    case ADVANCED_TOGGLE:
      return {...state, advanced: action.boolean} 
    case LOADING:
      return {...state, loading: action.boolean}
    case ERR:
      return {...state, error: action.errCode}
    default:
      return state
  }
}
