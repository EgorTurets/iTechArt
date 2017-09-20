import { ChangePassActions } from '../actions/ChangePassActions'


const initialState = {
    password: '',
    confirm: '',


    // canRedirect: false,
    // isPassForgot: false
};

export default function changePassState(state = initialState, action) {

    switch (action.type) {
        case ChangePassActions.CHG_PASS_INIT: {

            return Object.assign({}, state, {})
        }
    }
}