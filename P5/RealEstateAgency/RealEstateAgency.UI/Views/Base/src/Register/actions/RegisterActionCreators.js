import { RegisterActions } from './RegisterActions'

//------Registration actions------

export function FirstNameUpdate(event) {

    return {
        type: RegisterActions.FORM_REGISTER_FNAME_UPDATE,
        payload: event.target.value
    };
}

export function LastNameUpdate (event) {

    return {
        type: RegisterActions.FORM_REGISTER_LNAME_UPDATE,
        payload: event.target.value
    };
}

export function EmailUpdate (event) {

    return {
        type: RegisterActions.FORM_REGISTER_EMAIL_UPDATE,
        payload: event.target.value
    };
}
export function PasswordUpdate (event) {

    return {
        type: RegisterActions.FORM_REGISTER_PASSWORD_UPDATE,
        payload: event.target.value
    };
}

export function ConfirmUpdate (event) {

    return {
        type: RegisterActions.FORM_REGISTER_CONFIRM_UPDATE,
        payload: event.target.value
    };
}

export function Register (event) {
    event.preventDefault();

    let message;
    let isValidForm = false;
    let isSuccessfullyAdded = false;

    if(!event.target.firstName.value) {

        return {
            type: RegisterActions.FORM_REGISTER,
            payload: {
                message: 'Invalid first name!',
                isValidForm,
                isSuccessfullyAdded
            }
        }
    }
    if(!event.target.lastName.value) {

        return {
            type: RegisterActions.FORM_REGISTER,
            payload: {
                message: 'Invalid last name!',
                isValidForm,
                isSuccessfullyAdded
            }
        }
    }

    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(event.target.email.value)) {

        return {
            type: RegisterActions.FORM_REGISTER,
            payload: {
                message: 'Invalid Email!',
                isValidForm,
                isSuccessfullyAdded
            }
        }
    }
    if (event.target.password.value.length < 8) {

        return {
            type: RegisterActions.FORM_REGISTER,
            payload: {
                message: 'Password must be longer than 8 characters!',
                isValidForm,
                isSuccessfullyAdded
            }
        }
    }
    if (event.target.password.value !== event.target.confirm.value) {

        return {
            type: RegisterActions.FORM_REGISTER,
            payload: {
                message: 'Password is not confirmed!',
                isValidForm,
                isSuccessfullyAdded
            }
        }
    }

    isValidForm = true;

    let jsonForm = JSON.stringify({
        FirstName: event.target.firstName.value,
        LastName: event.target.lastName.value,
        Email: event.target.email.value,
        Password: event.target.password.value
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'API/Account/AddUser', false);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(jsonForm);

    if (xhr.status !== 200) {

        return {
            type: RegisterActions.FORM_REGISTER,
            payload: {
                message: 'Server error',
                isValidForm,
                isSuccessfullyAdded: false
            }
        }
    } else {

        return {
            type: RegisterActions.FORM_REGISTER,
            payload: {
                message: 'All right',
                isValidForm,
                isSuccessfullyAdded: true
            }
        }
    }
}