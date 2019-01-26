import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'
import {getUser} from '../actions/users'

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