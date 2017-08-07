import { Actions } from '../Actions'

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
        case Actions.FORM_REGISTER_FNAME_UPDATE: {
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
        case Actions.FORM_REGISTER_LNAME_UPDATE:
            if (/[^a-z]/i.test(action.payload)) {

                return Object.assign({}, state, {
                    message: 'Invalid character in the last name!'
                })
            } else

            return Object.assign({}, state, {
                newUserLastName: action.payload
            }); break;
        case Actions.FORM_REGISTER_EMAIL_UPDATE:

            return Object.assign({}, state, {
                newUserEmail: action.payload
            }); break;
        case Actions.FORM_REGISTER_PASSWORD_UPDATE:

            return Object.assign({}, state, {
                newUserPassword: action.payload
            }); break;
        case Actions.FORM_REGISTER_CONFIRM_UPDATE:

            return Object.assign({}, state, {
                newUserConfirm: action.payload
            }); break;
        case Actions.FORM_REGISTER:{

            debugger;

            if(!state.newUserFirstName) {

                return Object.assign({}, state, {
                    message: 'Invalid first name!'
                });
            }
            if(!state.newUserLastName) {

                return Object.assign({}, state, {
                    message: 'Invalid last name!'
                });
            }

            let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (!emailRegex.test(state.newUserEmail)) {

                return Object.assign({}, state, {
                    message: 'Invalid Email!'
                });
            }
            if (state.newUserPassword.length < 8) {

                return Object.assign({}, state, {
                    message: 'Password must be longer than 8 characters!'
                })
            }
            if (state.newUserPassword !== state.newUserConfirm) {

                return Object.assign({}, state, {
                    message: 'Password is not confirmed!'
                })
            }
            else {

                //window.localStorage.setItem('User', '123');

                return Object.assign({}, state, {
                    message: 'Account was created!'
                })
            }
        }; break;

        default:
            return state;
    }
}