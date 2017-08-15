import { Actions } from '../Actions'


const initialState = {
    email: '',
    password: '',
    canRedirect: false
};

export default function logInState(state = initialState, action) {

    switch (action.type) {
        case Actions.LOG_IN: {

            return Object.assign({}, state, {
                password: '',
                message: action.payload.message,
                canRedirect: action.payload.canRedirect
            });
        }
        case Actions.LOG_IN_EMAIL_UPDATE: {

            return Object.assign({}, state, {
                email: action.payload
            })
        }
        case Actions.LOG_IN_PASSWORD_UPDATE: {

            return Object.assign({}, state, {
                password: action.payload
            })
        }
        case Actions.USER_LOG_OUT: {

            return Object.assign({}, state, {
                email: '',
                canRedirect: false
            })
        }
        default:
            return state;
    }

}