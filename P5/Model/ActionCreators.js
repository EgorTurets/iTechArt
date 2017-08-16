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
    event.preventDefault();

    let message;
    let isValidForm = false;
    let isSuccessfullyAdded = false;

    if(!event.target.firstName.value) {

        return {
            type: Actions.FORM_REGISTER,
            payload: {
                message: 'Invalid first name!',
                isValidForm,
                isSuccessfullyAdded
            }
        }
    }
    if(!event.target.lastName.value) {

        return {
            type: Actions.FORM_REGISTER,
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
            type: Actions.FORM_REGISTER,
            payload: {
                message: 'Invalid Email!',
                isValidForm,
                isSuccessfullyAdded
            }
        }
    }
    if (event.target.password.value.length < 8) {

        return {
            type: Actions.FORM_REGISTER,
            payload: {
                message: 'Password must be longer than 8 characters!',
                isValidForm,
                isSuccessfullyAdded
            }
        }
    }
    if (event.target.password.value !== event.target.confirm.value) {

        return {
            type: Actions.FORM_REGISTER,
            payload: {
                message: 'Password is not confirmed!',
                isValidForm,
                isSuccessfullyAdded
            }
        }
    }

    isValidForm = true;
    let allUsers = JSON.parse(window.sessionStorage.getItem('allUsers'));

    let newUser = {
        id: +allUsers[allUsers.length - 1].id + 1,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        password: event.target.password.value
    };
    allUsers.push(newUser);
    window.sessionStorage.setItem('allUsers', JSON.stringify(allUsers));
    isSuccessfullyAdded = true;

    return {
        type: Actions.FORM_REGISTER,
        payload: {
            message: 'All right',
            isValidForm,
            isSuccessfullyAdded
        }
    }
}

//------Log In actions------

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
        type: Actions.LOG_IN,
        payload: {
            message,
            canRedirect
        }
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

    debugger;

    let unknownUser = true;
    let currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));
    if(!currentUser) {

        return {
            type: Actions.USER_INIT,
            payload: { unknownUser: unknownUser }
        }
    }
    unknownUser = false;

    let allNotifications = JSON.parse(window.sessionStorage.getItem('AllNotifications'));
    let currentUserNotifications = [];
    for (let i = 0; i < allNotifications.length; i++) {
        if(+allNotifications[i].proprietor === currentUser.id) {
            currentUserNotifications.push(allNotifications[i])
        }
    }

    return {
        type: Actions.USER_INIT,
        payload: {
            unknownUser,
            currentUser,
            currentUserNotifications
        }
    };
}

export function Delete(event) {

    let elementNotFound = false;
    let successfullyDeleted = false;
    let indexOfElement = -1;
    let allNotifications = JSON.parse(window.sessionStorage.getItem('AllNotifications'));
    for (let i = 0; i < allNotifications.length; i++) {
        if(allNotifications[i].id === +event.target.id) {
            indexOfElement = i;
            break;
        }
    }
    if (indexOfElement === -1) {
        elementNotFound = true;
    }

    allNotifications.splice(indexOfElement, 1);
    window.sessionStorage.setItem('AllNotifications', JSON.stringify(allNotifications));
    successfullyDeleted = true;

    let currentUserNotifications = [];
    for (let i = 0; i < allNotifications.length; i++) {
        if(+allNotifications[i].proprietor === state.id) {
            currentUserNotifications.push(allNotifications[i])
        }
    }

    return {
        type: Actions.USER_DELETE_NOTICE,
        payload: {
            elementNotFound,
            successfullyDeleted,
            currentUserNotifications
        }
    };
}

export function LogOut() {
    window.sessionStorage.removeItem('currentUser');

    return {
        type: Actions.USER_LOG_OUT
    }
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

export function AddForRentChange(event) {

    return {
        type: Actions.NOTICE_FOR_RENT_CHANGE,
        payload: event.target.value
    }
}

export function AddNotice(event) {

    debugger;

    event.preventDefault();
    let formIsValid = true;
    let addedSuccessfully = false;
    let message;

    if (event.target.title.value.length === 0) {
        message = 'The title can not be empty!';
        formIsValid = false;
    }
    else {
        if (event.target.address.value.length === 0) {
            message = 'The address can not be empty!';
            formIsValid = false;
        }
    }

    if (formIsValid) {
        let currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));
        let allNotifications = JSON.parse(window.sessionStorage.getItem('AllNotifications'));

        let newNoticeForm = {
            id: allNotifications[allNotifications.length-1].id + 1,
            title: event.target.title.value,
            description: event.target.description.value,
            metric: event.target.metric.value,
            address: event.target.address.value,
            price: event.target.price.value,
            isForRent: event.target.isForRent.value === 'true',
            proprietor: currentUser.id
        };

        allNotifications.push(newNoticeForm);
        window.sessionStorage.setItem('AllNotifications', JSON.stringify(allNotifications));
        addedSuccessfully = true;
    }

    return {
        type: Actions.NOTICE_ADD,
        payload: {
            formIsValid,
            addedSuccessfully,
            message
        }
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
    event.preventDefault();

    debugger;
    let isForRent = event.target.isForRent.value === 'true';

    let allNotifications = JSON.parse(window.sessionStorage.getItem('AllNotifications'));
    let searchResults = allNotifications.filter((item) => {
        return ((item.price >= +event.target.minPrice.value) && (item.price <= +event.target.maxPrice.value) &&
            (item.metric >= +event.target.minMetric.value) && (item.metric <= +event.target.maxMetric.value) &&
            (item.isForRent === isForRent))
    });

    window.sessionStorage.setItem('SearchResults', JSON.stringify(searchResults));
    let firstPartOfResults = searchResults.slice(0, 5);

    return {
        type: Actions.SEARCH,
        payload: {
            firstPartOfResults,
            resultsCount: searchResults.length
        }
    }
}

export function SearchPageChange(event) {

    return {
        type: Actions.SEARCH_PAGE_CHANGE,
        payload: +event.target.innerText
    }
}

export function SearchForRentChange(event) {

    return {
        type: Actions.SEARCH_FOR_RENT_CHANGE,
        payload: event.target.value
    }
}