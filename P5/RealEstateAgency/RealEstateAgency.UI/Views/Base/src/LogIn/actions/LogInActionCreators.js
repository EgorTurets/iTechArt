import { LogInActions } from './LogInActions'
import {getCookie} from "../../Common/scripts";

//------Log In actions------

export function LogInInit() {
    if(getCookie('Rea.Auth')) {

        return {
            type: LogInActions.LOG_IN_INIT,
            payload: {
                canRedirect: true
            }
        }
    }

    return {
        type: LogInActions.LOG_IN_INIT,
        payload: {
            canRedirect: false
        }
    }
}

export function LogIn(event) {

    event.preventDefault();

    let message;
    let canRedirect = false;
    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(event.target.email.value)) {
        return {
            type: LogInActions.LOG_IN,
            payload: {
                message: 'Invalid Email!',
                canRedirect
            }
        }
    }
    if (event.target.password.value.length < 8) {
        return {
            type: LogInActions.LOG_IN,
            payload: {
                message: 'Password must be longer than 8 characters!',
                canRedirect
            }
        }
    }

    let jsonForm = JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'API/Account/SignIn', false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(jsonForm);

    if (xhr.status !== 200) {

        return {
            type: LogInActions.LOG_IN,
            payload: {
                message: 'Invalid email or password!',
                canRedirect: false
            }
        }
    }
    else {

        let jsonResponse = JSON.parse(xhr.responseText);
        return {
            type: LogInActions.LOG_IN,
            payload: {
                canRedirect: true
            }
        }
    }
}

export function LogInForgotPass(event) {

    return {
        type: LogInActions.LOG_IN_FORGOT_PASS,
    }
}

export function LogInResetPass(event) {
    let jsonForm = JSON.stringify({
        email: event.target.email.value,
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'API/Account/ResetPassword', false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(jsonForm);

    if (xhr.status !== 200) {
        let jsonResponse = JSON.parse(xhr.responseText);

        return {
            type: LogInActions.LOG_IN_RESET_PASS,
            payload: {
                message: jsonResponse,
                isPassWasReset: false
            }
        }
    }
    else {

        return {
            type: LogInActions.LOG_IN,
            payload: {
                isPassWasReset: true
            }
        }
    }
}

export function LogInEmailUpd(event) {

    return {
        type: LogInActions.LOG_IN_EMAIL_UPDATE,
        payload: event.target.value
    }
}

export function LogInPassUpd(event) {

    return {
        type: LogInActions.LOG_IN_PASSWORD_UPDATE,
        payload: event.target.value
    }
}