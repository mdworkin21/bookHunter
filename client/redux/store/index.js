import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import regeneratorRuntime, { async } from "regenerator-runtime";
import resultsReducer from '../reducers/results'
import searchStateReducer from '../reducers/searchState'

//Combines Reducers
const rootReducer = combineReducers({results: resultsReducer, searchState: searchStateReducer})

//Creates Store
const store = createStore( rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store