import { Actions } from '../Actions'

const initialState = {
        firstName: 'Unknown',
        lastName: 'User'
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case Actions.FORM_REGISTER_FNAME_UPDATE:
            return Object.assign({}, state, {
                user: {
                    firstName: action.payload
                }
            }); break;
        case Actions.FORM_REGISTER_LNAME_UPDATE:
            return Object.assign({}, state, {
                user: {
                    lastName: action.payload
                }
            }); break;
        case Actions.FORM_REGISTER_EMAIL_UPDATE:
            return Object.assign({}, state, {
                user: {
                    email: action.payload
                }
            }); break;
        case Actions.FORM_REGISTER_PASSWORD_UPDATE:
            return Object.assign({}, state, {
                user: {
                    password: action.payload
                }
            }); break;
        case Actions.FORM_REGISTER_CONFIRM_UPDATE:
            return Object.assign({}, state, {
                user: {
                    confirm: action.payload
                }
            });
        default:
            return state;
    }
}