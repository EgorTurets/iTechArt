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

export function Delete(event) {

    return {
        type: Actions.USER_DELETE_NOTICE,
        payload: event.target.id
    };
}


//------Notice add actions------

export  function SetProprietor(id) {

    return {
        type: Actions.NOTICE_SET_PROPRIETOR,
        payload: id
    }
}

export function AddTitleUpdate(event) {

    return {
        type: Actions.NOTICE_TITLE_UPDATE,
        payload: event.target.value
    }
}

export function AddDescriptionUpdate(event) {

    return {
        type: Actions.NOTICE_DESCRIPTION_UPDATE,
        payload: event.target.value
    }
}

export function AddAddressUpdate(event) {

    return {
        type: Actions.NOTICE_ADDRESS_UPDATE,
        payload: event.target.value
    }
}

export function AddMetricUpdate(event) {

    return {
        type: Actions.NOTICE_METRIC_UPDATE,
        payload: +event.target.value
    }
}

export function AddPriceUpdate(event) {

    return {
        type: Actions.NOTICE_PRICE_UPDATE,
        payload: +event.target.value
    }
}

export function AddNotice(event) {

    return {
        type: Actions.NOTICE_ADD
    }
}

//------Search actions------

export function SearchInit() {

    return {
        type: Actions.SEARCH_INIT
    }
}

export function SearchMinPriceUpdate(event) {

    return {
        type: Actions.SEARCH_MIN_PRICE_UPDATE,
        payload: +event.target.value
    }
}

export function SearchMaxPriceUpdate(event) {

    return {
        type: Actions.SEARCH_MAX_PRICE_UPDATE,
        payload: +event.target.value
    }
}

export function SearchMinMetricUpdate(event) {

    return {
        type: Actions.SEARCH_MIN_METRIC_UPDATE,
        payload: +event.target.value
    }
}

export function SearchMaxMetricUpdate(event) {

    return {
        type: Actions.SEARCH_MAX_METRIC_UPDATE,
        payload: +event.target.value
    }
}

export function SearchNotifications(event) {

    return {
        type: Actions.SEARCH,
    }
}

export function SearchPageChange(event) {

    return {
        type: Actions.SEARCH_PAGE_CHANGE,
        payload: +event.target.innerText
    }
}