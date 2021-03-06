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

            debugger;

            if(action.payload.unknownUser) {
                return Object.assign({}, state, {
                    canRedirect: true
                })
            }

            return Object.assign({}, state, {
                id: action.payload.currentUser.id,
                firstName: action.payload.currentUser.firstName,
                lastName: action.payload.currentUser.lastName,
                email: action.payload.currentUser.email,
                notifications: action.payload.currentUserNotifications,
                canRedirect: false
            })
        }
        case CabinetActions.USER_DELETE_NOTICE: {

            let message;
            if (action.payload.elementNotFound) {
                message = 'Notification not found';
            }
            if(!action.payload.successfullyDeleted) {
                message = 'Error during deleting';
            }

            return Object.assign({}, state, {
                message: message,
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