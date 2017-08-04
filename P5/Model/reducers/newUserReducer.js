import { Actions } from '../Actions'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
};

export default function newUserState(state = initialState, action) {

    switch (action.type) {
        case Actions.FORM_REGISTER_FNAME_UPDATE:
            return Object.assign({}, state, {
                firstName: action.payload
            }); break;
        case Actions.FORM_REGISTER_LNAME_UPDATE:
            return Object.assign({}, state, {
                lastName: action.payload
            }); break;
        case Actions.FORM_REGISTER_EMAIL_UPDATE:
            return Object.assign({}, state, {
                email: action.payload
            }); break;
        case Actions.FORM_REGISTER_PASSWORD_UPDATE:
            return Object.assign({}, state, {
                password: action.payload
            }); break;
        case Actions.FORM_REGISTER_CONFIRM_UPDATE:
            return Object.assign({}, state, {
                confirm: action.payload
            }); break;
        case Actions.FORM_REGISTER:{
            let curState = state;
            console.log('Current State');
            console.log(curState);
            debugger;
            return state;
        }; break;

        default:
            return state;
    }
}