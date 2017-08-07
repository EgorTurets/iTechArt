import {Actions} from './Actions'
import { browserHistory } from 'react-router'

//------Registration actions------

export function FirstNameUpdate(event) {

    return {
        type: Actions.FORM_REGISTER_FNAME_UPDATE,
        payload: event.target.value
    };
}

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
        type: Actions.FORM_REGISTER,
        payload: '/user'
    };
}


//------Personal cabinet actions------

export function UserInit (event) {

    return {
        type: Actions.USER_INIT
    };
}