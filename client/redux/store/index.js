import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import regeneratorRuntime, { async } from "regenerator-runtime";
import resultsReducer from '../reducers/results'
import searchStateReducer from '../reducers/searchState'
import userReducer from '../reducers/user';


//Redux Devtools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//Combines Reducers
const rootReducer = combineReducers({
  results: resultsReducer, 
  searchState: searchStateReducer,
  user: userReducer
})

//Creates Store
const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, createLogger())))

export default store