import { RegisterActions } from '../actions/RegisterActions'

const initialState = {
    newUserFirstName: '',
    newUserLastName: '',
    newUserEmail: '',
    newUserPassword: '',
    newUserConfirm: '',
    message: ''
};

export default function newUserState(state = initialState, action) {

    switch (action.type) {
        case RegisterActions.FORM_REGISTER_FNAME_UPDATE: {
            if (/[^a-z]/i.test(action.payload)) {

                return Object.assign({}, state, {
                    message: 'Invalid character in the first name.'
                })
            } else

            return Object.assign({}, state, {
                newUserFirstName: action.payload
            });
        }
        break;
        case RegisterActions.FORM_REGISTER_LNAME_UPDATE:
            if (/[^a-z]/i.test(action.payload)) {

                return Object.assign({}, state, {
                    message: 'Invalid character in the last name!'
                })
            } else

            return Object.assign({}, state, {
                newUserLastName: action.payload
            }); break;
        case RegisterActions.FORM_REGISTER_EMAIL_UPDATE:

            return Object.assign({}, state, {
                newUserEmail: action.payload
            }); break;
        case RegisterActions.FORM_REGISTER_PASSWORD_UPDATE:

            return Object.assign({}, state, {
                newUserPassword: action.payload
            }); break;
        case RegisterActions.FORM_REGISTER_CONFIRM_UPDATE:

            return Object.assign({}, state, {
                newUserConfirm: action.payload
            }); break;
        case RegisterActions.FORM_REGISTER:{
            debugger;
            if(!action.payload.isValidForm) {

                return Object.assign({}, state, {
                    newUserPassword: '',
                    newUserConfirm: '',
                    message: action.payload.message
                })
            }
            if(!action.payload.isSuccessfullyAdded) {

                return Object.assign({}, state, {
                    newUserPassword: '',
                    newUserConfirm: '',
                    message: 'Error during registration. Please try again later.'
                })
            }

            return Object.assign({}, state, {
                newUserFirstName: '',
                newUserLastName: '',
                newUserEmail: '',
                newUserPassword: '',
                newUserConfirm: '',
                message: 'Account was created!'
            })
        }
        default:
            return state;
    }
}