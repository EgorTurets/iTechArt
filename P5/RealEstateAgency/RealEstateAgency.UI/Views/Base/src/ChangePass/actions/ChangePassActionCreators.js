import { ChangePassActions } from './ChangePassActions'

//------Change Password actions------

export function ChangePassInit(userId, token) {
    return {
        type:ChangePassActions.CHG_PASS_INIT,
        payload: {
            userId,
            token
        }
    }
}

export function PasswordUpdate(event) {
    return {
        type: ChangePassActions.CHG_PASS_PASSWORD_UPDATE,
        payload: event.target.value
    };
}

export function ConfirmUpdate(event) {
    return {
        type: ChangePassActions.CHG_PASS_CONFIRM_UPDATE,
        payload: event.target.value
    }
}

export function ChangePassSubmit(event) {
    event.preventDefault();

    debugger;
    let queryParamsRegExp = /id=(\d+)&token=([\w-]{36})$/;
    let userId, resetToken;
    window.location.search.replace(queryParamsRegExp, function (str, id, token) {
        userId = id;
        resetToken = token;
    });

    let isValidForm = false;

    if (event.target.newPassword.value.length < 8) {

        return {
            type: ChangePassActions.CHG_PASS_PASSWORD_UPDATE,
            payload: {
                message: 'Password must be longer than 8 characters!',
                isValidForm
            }
        }
    }
    if (event.target.newPassword.value !== event.target.confirm.value) {

        return {
            type: ChangePassActions.CHG_PASS_CONFIRM_UPDATE,
            payload: {
                message: 'Password is not confirmed!',
                isValidForm
            }
        }
    }

    isValidForm = true;

    let jsonForm = JSON.stringify({
        userId,
        resetToken,
        newPassword: event.target.newPassword.value
    });

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'API/Account/ChangePass', false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(jsonForm);

    if (xhr.status !== 200) {
        return {
            type: ChangePassActions.CHG_PASS_SUBMIT,
            payload: {
                message: JSON.parse(xhr.responseText).Message,
                isValidForm
            }
        }
    }
    else {
        return {
            type: ChangePassActions.CHG_PASS_SUBMIT,
            payload: {
                type: ChangePassActions.CHG_PASS_SUBMIT,
                payload: {
                    message: JSON.parse(xhr.responseText).Message,
                    isSuccessfullyReset: true,
                    isValidForm
                }
            }
        }
    }
}