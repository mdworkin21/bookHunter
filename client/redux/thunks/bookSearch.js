import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'
import {getBooks, sortBooks, toggleAdvancedSearch, isLoading, noResults, clearResults, flagErr} from '../actions/bookSearch'

//Thunks for AJAX Calls
export const simpleSearchOpenLibrary = (searchTerms) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/api/openLibrary/?q=${searchTerms}`)  
      const books = response.data.docs
      console.log('BOOKS', books)
      displayResults(books, response, dispatch)
  } catch(err){  
      throwErr(err, dispatch)
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
      displayResults(books, response, dispatch)
  } catch(err){
      throwErr(err, dispatch)
      console.log(err)
    }
  }
}

//Helper Functions
const displayResults = (books, response, dispatch) => {
  if (!books.length || response.status !== 200){
    dispatch(noResults(true))
    dispatch(isLoading(false))
  } else {
    const action = getBooks(books)
    dispatch(action)
    dispatch(isLoading(false))
  }
}

const throwErr = (err, dispatch) => {
  dispatch(clearResults())
  dispatch(isLoading(false))
  dispatch(flagErr(err))
}