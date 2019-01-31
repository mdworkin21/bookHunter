import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'
import { getUser } from '../actions/users'

//USER THUNK
export const getUserFromPassport = (id) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/authenticate/getUser/${id}`)
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
        userName: user.userName,
        email: user.email,
        password: user.password
      })
      if (newUser.status === 201){
        dispatch(getUserFromPassport(newUser.data.id))
      }
    } catch(err){
        console.log(err)
    }
  }
}