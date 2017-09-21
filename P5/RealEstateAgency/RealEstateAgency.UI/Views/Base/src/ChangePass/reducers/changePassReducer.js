import { ChangePassActions } from '../actions/ChangePassActions'


const initialState = {
    password: '',
    confirm: '',
    token: '',
    userId: '',
};

export default function changePassState(state = initialState, action) {

    switch (action.type) {
        case ChangePassActions.CHG_PASS_INIT: {
            return Object.assign({}, state, {
                token: action.payload.token,
                userId: action.payload.userId
            })
        }
        case ChangePassActions.CHG_PASS_PASSWORD_UPDATE: {
            return Object.assign({}, state, {
                password: action.payload
            })
        }
        case ChangePassActions.CHG_PASS_CONFIRM_UPDATE: {
            return Object.assign({}, state, {
                confirm: action.payload
            })
        }
        case ChangePassActions.CHG_PASS_SUBMIT: {



            return Object.assign({}, state, {})
        }
        default: return state;
    }
}