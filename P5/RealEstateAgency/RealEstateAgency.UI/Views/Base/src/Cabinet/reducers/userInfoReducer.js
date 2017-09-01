import { CabinetActions } from '../actions/CabinetActions'


const initialState = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    notifications: [],
    canRedirect: false
};

export default function userInfoState(state = initialState, action) {

    switch (action.type) {
        case CabinetActions.USER_INIT: {
            if(action.payload.unknownUser) {
                return Object.assign({}, state, {
                    canRedirect: true
                })
            }

            return Object.assign({}, state, {
                firstName: action.payload.currentUser.FirstName,
                lastName: action.payload.currentUser.LastName,
                email: action.payload.currentUser.Email,
                notifications: action.payload.currentUserNotifications,
                canRedirect: false
            })
        }
        case CabinetActions.USER_DELETE_NOTICE: {

            return Object.assign({}, state, {
                notifications: action.payload.currentUserNotifications
            })
        }
        case CabinetActions.USER_LOG_OUT: {

            return Object.assign({}, state, {
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                notifications: [],
                canRedirect: true
            })
        }
        default:
            return state;
    }

}