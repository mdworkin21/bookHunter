import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import regeneratorRuntime, { async } from "regenerator-runtime";
import axios from 'axios'
import {GET_BOOKS, SORT_BOOKS, ADVANCED_TOGGLE, LOADING, NO_RESULTS, CLEAR, ERR} from '../actions/bookSearch'
import {GET_USER, NEW_USER, getUser} from '../actions/users'


//Initializes State
const initialState = {
  results: [],
  advanced: false,
  loading: false,
  noResults: false,
  error: '',
  user: '' //Will be an ID num
}


//USER THUNK
// export const getUserFromPassport = () => {
//   return async (dispatch) => {
//     try{
//       const response = await axios.get('/authenticate/getUser')
//       const user = response.data
//       const action = getUser(user)
//       dispatch(action)
//     }catch(err){
//       console.log(err)
//     }
//   }
// }

// export const createNewUser = (user) => {
//   return async(dispatch) => {
//     try{
//       const newUser = await axios.post('/authenticate/newUser', {
//         name: user.name,
//         email: user.email,
//         password: user.password
//       })

//       if (newUser.status === 201){
//         getUserFromPassport(newUser.data.id)
//       }
//     } catch(err){
//         console.log(err)
//     }
//   }
// }





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