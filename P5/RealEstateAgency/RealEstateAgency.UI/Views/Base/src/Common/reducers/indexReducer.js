import { combineReducers } from 'redux'
import newUserState from '../../Register/reducers/newUserReducer'
import userInfoState from '../../Cabinet/reducers/userInfoReducer'
import logInState from '../../LogIn/reducers/logInReducer'
import newNotificationState from '../../Cabinet/reducers/newNotificationReducer'
import searchState from '../../Search/reducers/searchReducer'
import changePassState from '../../ChangePass/reducers/changePassReducer'

export default combineReducers({
    newUserState,
    userInfoState,
    logInState,
    newNotificationState,
    searchState,
    changePassState,
})