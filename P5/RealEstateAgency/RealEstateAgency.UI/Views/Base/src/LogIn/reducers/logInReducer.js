import { LogInActions } from '../actions/LogInActions'


const initialState = {
    email: '',
    password: '',
    canRedirect: false,
    isPassForgot: false
};

export default function logInState(state = initialState, action) {

    switch (action.type) {
        case LogInActions.LOG_IN_INIT: {

            return Object.assign({}, state, {
                email: '',
                canRedirect: action.payload.canRedirect,
                isPassForgot: false,
                isMsgForgot: false,
                message: ''
            })
        }
        case LogInActions.LOG_IN: {

            return Object.assign({}, state, {
                password: '',
                message: action.payload.message,
                canRedirect: action.payload.canRedirect
            });
        }
        case LogInActions.LOG_IN_EMAIL_UPDATE: {

            return Object.assign({}, state, {
                email: action.payload
            })
        }
        case LogInActions.LOG_IN_PASSWORD_UPDATE: {

            return Object.assign({}, state, {
                password: action.payload
            })
        }
        case LogInActions.LOG_IN_FORGOT_PASS: {

            return Object.assign({}, state, {
                isPassForgot: true
            })
        }
        case LogInActions.LOG_IN_RESET_PASS: {
            if(action.payload.isPassWasReset) {

                return Object.assign({}, state, {
                    isPassForgot: false,
                    email: '',
                    message: 'See the link for changing the password in the log file'
                })
            }
            else {

                return Object.assign({}, state, {
                    message: action.payload.message
                })
            }
        }
        case LogInActions.LOG_IN_FORGOT_MSG: {
            return Object.assign({}, state,{
                isMsgForgot: true
            })
        }
        case LogInActions.LOG_IN_SEND_NEW_MSG: {
            return Object.assign({}, state, {
                message: action.payload.message
            })
        }
        default:
            return state;
    }

}