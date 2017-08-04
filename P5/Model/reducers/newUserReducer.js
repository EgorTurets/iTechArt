import { Actions } from '../Actions'

const initialState = {
    newUserFirstName: '',
    newUserLastName: '',
    newUserEmail: '',
    newUserPassword: '',
    newUserConfirm: '',
};

export default function newUserState(state = initialState, action) {

    switch (action.type) {
        case Actions.FORM_REGISTER_FNAME_UPDATE:
            debugger;
            return Object.assign({}, state, {
                newUserFirstName: action.payload
            }); break;
        case Actions.FORM_REGISTER_LNAME_UPDATE:
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
        // case Actions.FORM_REGISTER:{
        //     if (state.newUserPassword === state.newUserConfirm) {
        //         debugger;
        //         return Object.assign({}, state, {
        //
        //         })
        //     }
        //     else {
        //         debugger;
        //         return Object.assign({}, state, {
        //             newUserPassword: '',
        //             newUserConfirm: ''
        //         });
        //     }
        // }; break;

        default:
            return state;
    }
}