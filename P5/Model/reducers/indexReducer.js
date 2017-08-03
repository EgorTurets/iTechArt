import { combineReducers } from 'redux'
import newUserState from './newUserReducer'
import userInfoState from './userInfoProducer'

export default combineReducers({
    newUserState,
    userInfoState
})