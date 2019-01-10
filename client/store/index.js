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
  error: ''
}

//Constants for Action Types
const GET_BOOKS = 'GET_BOOKS'
const SORT_BOOKS = 'SORT_BOOKS'
const ADVANCED_TOGGLE = 'ADVANCED_TOGGLE'
const LOADING = 'LOADING'
const NO_RESULTS = 'BOOLEAN'
const CLEAR = 'CLEAR'
const ERR = 'ERR'

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

//Thunks for AJAX Calls
export const simpleSearchOpenLibrary = (searchTerms) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/api/openLibrary/?q=${searchTerms}`)  
      const books = response.data.docs
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
    default: 
    return state
  }
}

//Creates Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store