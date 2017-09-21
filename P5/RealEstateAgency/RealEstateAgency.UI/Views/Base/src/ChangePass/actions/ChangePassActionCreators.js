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

    return {

    }
}