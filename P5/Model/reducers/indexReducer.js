import { combineReducers } from 'redux'
import newUserState from './newUserReducer'
import userInfoState from './userInfoProducer'
import logInState from './logInReducer'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    // routing: routerReducer,
    newUserState,
    userInfoState,
    logInState
})