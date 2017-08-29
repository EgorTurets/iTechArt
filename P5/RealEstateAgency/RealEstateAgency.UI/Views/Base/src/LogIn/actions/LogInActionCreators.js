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

    debugger;

    let serverResponse = jQuery.post(`API/Account/SignIn`,
        {
            email: event.target.email.value,
            password: event.target.password.value
        }, () => {}, 'application/json');

    serverResponse.success((data) => {
        debugger;
            serverResponse = data;
            canRedirect = true;

            return {
                type: LogInActions.LOG_IN,
                payload: {
                    message,
                    canRedirect
                }
            }
        })
        .error((data) => {
        debugger;
            canRedirect = false;

            return {
                type: LogInActions.LOG_IN,
                payload: {
                    message: 'Invalid email or password!',
                    canRedirect
                }
            }
        }).complete((data, status) => {debugger;});
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