import { Actions } from '../Actions'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
};

export default function newUserState(state = initialState, action) {

    debugger;
    switch (action.type) {
        case Actions.FORM_REGISTER_FNAME_UPDATE:
            return Object.assign({}, state, {
                newUserState: {
                    firstName: action.payload
                }
            }); break;
        case Actions.FORM_REGISTER_LNAME_UPDATE:
            return Object.assign({}, state, {
                newUserState: {
                    lastName: action.payload
                }
            }); break;
        case Actions.FORM_REGISTER_EMAIL_UPDATE:
            return Object.assign({}, state, {
                newUserState: {
                    email: action.payload
                }
            }); break;
        case Actions.FORM_REGISTER_PASSWORD_UPDATE:
            return Object.assign({}, state, {
                newUserState: {
                    password: action.payload
                }
            }); break;
        case Actions.FORM_REGISTER_CONFIRM_UPDATE:
            return Object.assign({}, state, {
                newUserState: {
                    confirm: action.payload
                }
            });
        default:
            return state;
    }
}