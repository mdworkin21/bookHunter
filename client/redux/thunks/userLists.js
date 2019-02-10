import regeneratorRuntime, { async } from "regenerator-runtime";
import axios from 'axios'
import { getFavorites, getWillRead, addToListFavorites, addToListWillRead, deleteFromFav, deleteFromWillRead} from '../actions/users'

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

export const deleteFromUserFav = (user, book) => {
  return async (dispatch) => {
    try{
      const response = await axios.delete(`/api/addbooks/favDelete/${user.id}/${book.id}`)
      if (response.status === 200){
        const action = deleteFromFav(book)
        dispatch(action)
      } else {
        console.log('ERRRRR')
      }
    }catch(err){
      console.log(err)
    }
  }
}

export const deleteFromUserWillRead = (user, book) => {
  return async (dispatch) => {
    try{
      const response = await axios.delete(`/api/addbooks/willReadDelete/${user.id}/${book.id}`)
      if (response.status === 200){
        const action = deleteFromWillRead(book)
        dispatch(action)
      } else {
        console.log('ERRRRR')
      }
    }catch(err){
      console.log(err)
    }
  }
}