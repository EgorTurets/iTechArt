import {Actions} from './Actions'

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

//------Log In actions------

export function LogIn(event) {

    return {
        type: Actions.LOG_IN
    }
}

export function LogInEmailUpd(event) {

    return {
        type: Actions.LOG_IN_EMAIL_UPDATE,
        payload: event.target.value
    }
}

export function LogInPassUpd(event) {

    return {
        type: Actions.LOG_IN_PASSWORD_UPDATE,
        payload: event.target.value
    }
}


//------Personal cabinet actions------

export function UserInit (event) {

    return {
        type: Actions.USER_INIT
    };
}