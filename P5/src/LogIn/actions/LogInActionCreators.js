import { LogInActions } from './LogInActions'

//------Log In actions------

export function LogInInit() {
    let currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));
    if(!currentUser) {

        return {
            type: LogInActions.LOG_IN_INIT,
            payload: {
                canRedirect: false
            }
        }
    }

    return {
        type: LogInActions.LOG_IN_INIT,
        payload: {
            canRedirect: true
        }
    }
}

export function LogIn(event) {

    debugger;
    event.preventDefault();

    let message;
    let canRedirect = false;
    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(event.target.email.value)) {
        message = 'Invalid Email!'
    }
    if (event.target.password.value.length < 8) {
        message = 'Password must be longer than 8 characters!'
    }

    let allUsers = JSON.parse(window.sessionStorage.getItem('allUsers'));
    for(let i = 0; i < allUsers.length; i++) {
        if ((allUsers[i].email === event.target.email.value) &&
            (allUsers[i].password === event.target.password.value)) {
            let currentUser = allUsers[i];
            window.sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
            canRedirect = true;
            break;
        }
    }
    if(!canRedirect) {
        message = 'Invalid email or password!'
    }

    return {
        type: LogInActions.LOG_IN,
        payload: {
            message,
            canRedirect
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