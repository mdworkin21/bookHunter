import regeneratorRuntime, { async } from "regenerator-runtime";
import axios from 'axios'
import { getUser, deleteUser} from '../actions/users'

//USER THUNK
export const getUserFromPassport = (id) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/authenticate/getUser/${id}`)
      const user = response.data
      console.log('USER', user)
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
        console.log('NEWEWEW', newUser.data)
        dispatch(getUserFromPassport(newUser.data.id))
      }
    } catch(err){
        console.log(err)
    }
  }
}

export const logInUser = (user) => {
  return async (dispatch) => {
    try{
      const loggedInUser = await axios.post('/authenticate/checkUser', {user})
      if (loggedInUser.status === 200){
        const user = loggedInUser.data
        const action = getUser(user)
        dispatch(action)
      }
    } catch(err){
        console.log(err)
    }
  }
}

export const removeUser = () => {
  return async (dispatch) => {
    try{
      const logOut = await axios.delete('/authenticate/logout')
      const action = (deleteUser())
      dispatch(action)
    }catch(err){
      console.log(err)
    } 
  }
} 