import { combineReducers } from 'redux'
import newUserState from './newUserReducer'
import userInfoState from './userInfoReducer'
import logInState from './logInReducer'
import newNotificationState from './newNotificationReducer'

export default combineReducers({
    newUserState,
    userInfoState,
    logInState,
    newNotificationState
})