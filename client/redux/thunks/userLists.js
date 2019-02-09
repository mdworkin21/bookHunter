import regeneratorRuntime, { async } from "regenerator-runtime";
import axios from 'axios'
import { getFavorites, getWillRead} from '../actions/users'


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