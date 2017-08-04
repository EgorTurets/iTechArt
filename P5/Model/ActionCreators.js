import {Actions} from './Actions'
import { browserHistory } from 'react-router'

export function FirstNameUpdate(event) {

    return {
        type: Actions.FORM_REGISTER_FNAME_UPDATE,
        payload: event.target.value
    };
};

export function LastNameUpdate (event) {

    return {
        type: Actions.FORM_REGISTER_LNAME_UPDATE,
        payload: event.target.value
    };
}

export function EmailUpdate (event) {

    return {
        type: Actions.FORM_REGISTER_EMAIL_UPDATE,
        payload: event.target.value
    };
}
export function PasswordUpdate (event) {

    return {
        type: Actions.FORM_REGISTER_PASSWORD_UPDATE,
        payload: event.target.value
    };
}

export function ConfirmUpdate (event) {

    return {
        type: Actions.FORM_REGISTER_CONFIRM_UPDATE,
        payload: event.target.value
    };
}

export function Register (event) {

    return {
        type: Actions.FORM_REGISTER
    };

    // return function (dispatch, getState) {
    //     const state = getState();
    //     if (state.user.password === state.user.confirm) {
    //         dispatch(reset());
    //         request('', {send:{
    //             user: {
    //                 firstName: state.firstName,
    //                 lastName: state.lastName,
    //                 password: state.password,
    //                 email: state.email
    //             }
    //         }}).then(function () {
    //             browserHistory.push('/cabinet');
    //             // router.push('/cabinet');
    //             console.log('Current User: ' + state.user.firstName + ' ' + state.user.lastName)
    //         }).catch(function () {
    //             console.log('Error in Action Register')
    //         });
    //         console.log('register / state');
    //         console.log(state)
    //     }
    //     else {
    //         window.alert("Password != Confirm")
    //     }
    //
    // }
}