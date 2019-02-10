import regeneratorRuntime, { async } from "regenerator-runtime";
import axios from 'axios'
import { getFavorites, getWillRead, addToListFavorites, addToListWillRead} from '../actions/users'


//GETS USER LISTS
//I think the issue might be due to the fact that the id i'm passing in here is NOT the correct one that links to db. To fix, have db send id of book?
export const getUserFavorites = (id) => {
  return async (dispatch) => {
    try{ 
      const response = await axios.get(`api/getLists/favorites/${id}`)
      const userList = response.data
      const action = getFavorites(userList)
      dispatch(action)
    }catch(err){
      console.log(err)
    }
  }
}

export const getUserWillReads = (id) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`api/getLists/willRead/${id}`)
      const userList = response.data
      const action = getWillRead(userList)
      dispatch(action)
    }catch(err){
      console.log(err)
    }
  }
}

export const addToUserFavs = (book, user) => {
  return async (dispatch) => {
    try{
      const response = await axios.post('/api/addbooks/addbook', book)
      const bookId = response.data[0].id
      const userId = user.id
      const addedFavorite = await axios.post('/api/addbooks/addToFavorites', {bookId, userId})
      const addedBook = Array.isArray(response.data) ? response.data[0] : response.data
      console.log('THUNK', addedBook)
      const action = addToListFavorites(addedBook)
      dispatch(action)
    }
   catch(err){
    console.log(err)
    }
  }
}

export const addToUserWillRead = (book, user) => {
  return async (dispatch) => {
    try{
      const response = await axios.post('/api/addbooks/addbook', book)
      const bookId = response.data[0].id
      const userId = user.id
      const addedWillRead = await axios.post('/api/addbooks/willRead', {bookId, userId})
      const addedBook = Array.isArray(response.data) ? response.data[0] : response.data
      const action = addToListWillRead(addedBook)
      dispatch(action)
    }
   catch(err){
    console.log(err)
    }
  }
}