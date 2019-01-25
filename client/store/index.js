import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import regeneratorRuntime, { async } from "regenerator-runtime";
import axios from 'axios'
import Err from '../components/Err';

//Initializes State
const initialState = {
  results: [],
  advanced: false,
  loading: false,
  noResults: false,
  error: '',
  user: '' //Will be an ID num
}

//Constants for Action Types
const GET_BOOKS = 'GET_BOOKS'
const SORT_BOOKS = 'SORT_BOOKS'
const ADVANCED_TOGGLE = 'ADVANCED_TOGGLE'
const LOADING = 'LOADING'
const NO_RESULTS = 'BOOLEAN'
const CLEAR = 'CLEAR'
const ERR = 'ERR'

//USER ACTION TYPE
const GET_USER = 'GET_USER'
const NEW_USER = 'NEW_USER'

//Action Creators
const getBooks = (books) => {
  return {
    type: GET_BOOKS,
    books
  }
}

export const sortBooks = (books) => {
  return {
    type: SORT_BOOKS,
    books
  }
}

export const toggleAdvancedSearch = (boolean) => {
  return {
    type: ADVANCED_TOGGLE,
    boolean
  }
}

export const isLoading = (boolean) => {
  return {
    type: LOADING,
    boolean
  }
}

export const noResults = (boolean) => {
  return {
    type: NO_RESULTS,
    boolean
  }
}

export const clearResults = () => {
  return {
    type: CLEAR
  }
}

export const flagErr = (errCode) => {
  return {
    type: ERR,
    errCode
  }
}
//USER ACTION CREATOR
export const getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

//Thunks for AJAX Calls
export const simpleSearchOpenLibrary = (searchTerms) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/api/openLibrary/?q=${searchTerms}`)  
      const books = response.data.docs
      console.log('BOOKS', books)
      if (!books.length || response.status !== 200){
        dispatch(noResults(true))
        dispatch(isLoading(false))
      } else {
        const action = getBooks(books)
        dispatch(action)
        dispatch(isLoading(false))
      }
  } catch(err){  
      dispatch(clearResults())
      dispatch(isLoading(false))
      dispatch(flagErr(err))
      console.log(err)
    }
  }
}

export const advancedSearchOpenLibrary = (searchTerms) => {
  const queryString = `/api/openLibrary/?author=${searchTerms.author}&title=${searchTerms.title}&year=${searchTerms.year}&sort=${searchTerms.sortBy}`
  return async (dispatch) => {
    try{
      const response = await axios.get(queryString)  
      let books = response.data.docs ? response.data.docs : response.data
      if (!books.length || response.status !== 200){
        dispatch(noResults(true))
        dispatch(isLoading(false))
      } else {
        const action = getBooks(books)
        dispatch(action)
        dispatch(isLoading(false))
      }
  } catch(err){
      dispatch(clearResults())
      dispatch(isLoading(false))
      dispatch(flagErr(err))
      console.log(err)
    }
  }
}

//USER THUNK
export const getUserFromPassport = () => {
  return async (dispatch) => {
    try{
      const response = await axios.get('/authenticate/getUser')
      const user = response.data
      const action = getUser(user)
      dispatch(action)
    }catch(err){
      console.log(err)
    }
  }
}

export const createNewUser = (user) => {
  return async(dispatch) => {
    try{
      const newUser = await axios.post('/authenticate/newUser', {
        name: user.name,
        email: user.email,
        password: user.password
      })

      if (newUser.status === 201){
        getUserFromPassport(newUser.data.id)
      }
    } catch(err){
        console.log(err)
    }
  }
}





//Reducer 
function reducer(state = initialState, action){
  switch(action.type){
    case GET_BOOKS:
      return {...state, results: action.books}
    case SORT_BOOKS:
      return {...state, results: action.books}
    case ADVANCED_TOGGLE:
      return {...state, advanced: action.boolean} 
    case LOADING:
      return {...state, loading: action.boolean}
    case NO_RESULTS:
      return {...state, noResults: action.boolean}
    case CLEAR:
      return {...state, results: []}
    case ERR:
      return {...state, error: action.errCode}
      case GET_USER:
      return {...state, user: action.user.id}
    default: 
    return state
  }
}

//Creates Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store