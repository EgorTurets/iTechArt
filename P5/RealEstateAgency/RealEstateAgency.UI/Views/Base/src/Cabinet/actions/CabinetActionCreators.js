import {CabinetActions} from './CabinetActions'
import {getCookie} from "../../Common/scripts"

//------Personal cabinet actions------

export function UserInit (event) {

    debugger;

    let currentUser;
    let xhrUser = new XMLHttpRequest();
    xhrUser.open('GET', 'API/Account/UserInfo', false);
    xhrUser.send();

    if (xhrUser.status !== 200) {

        return {
            type: CabinetActions.USER_INIT,
            payload: { unknownUser: true }
        }
    }
    else {
        currentUser = JSON.parse(xhrUser.responseText);
    }

    let xhrNotifications = new XMLHttpRequest();
    xhrNotifications.open('GET', 'API/Listing/GetUserListings', false);
    xhrNotifications.send();

    let currentUserNotifications = JSON.parse(xhrNotifications.responseText);

    return {
        type: CabinetActions.USER_INIT,
        payload: {
            unknownUser: false,
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

    let currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));
    let currentUserNotifications = [];
    for (let i = 0; i < allNotifications.length; i++) {
        if(+allNotifications[i].proprietor === currentUser.id) {
            currentUserNotifications.push(allNotifications[i])
        }
    }

    return {
        type: CabinetActions.USER_DELETE_NOTICE,
        payload: {
            elementNotFound,
            successfullyDeleted,
            currentUserNotifications
        }
    };
}

export function LogOut() {
    let xhrUser = new XMLHttpRequest();
    xhrUser.open('GET', 'API/Account/SignOut', false);
    xhrUser.send();

    return {
        type: CabinetActions.USER_LOG_OUT
    }
}

//------Notice add actions------

export  function SetProprietor(id) {

    return {
        type: CabinetActions.NOTICE_SET_PROPRIETOR,
        payload: id
    }
}

export function AddTitleUpdate(event) {

    return {
        type: CabinetActions.NOTICE_TITLE_UPDATE,
        payload: event.target.value
    }
}

export function AddDescriptionUpdate(event) {

    return {
        type: CabinetActions.NOTICE_DESCRIPTION_UPDATE,
        payload: event.target.value
    }
}

export function AddAddressUpdate(event) {

    return {
        type: CabinetActions.NOTICE_ADDRESS_UPDATE,
        payload: event.target.value
    }
}

export function AddMetricUpdate(event) {

    return {
        type: CabinetActions.NOTICE_METRIC_UPDATE,
        payload: +event.target.value
    }
}

export function AddPriceUpdate(event) {

    return {
        type: CabinetActions.NOTICE_PRICE_UPDATE,
        payload: +event.target.value
    }
}

export function AddForRentChange(event) {

    return {
        type: CabinetActions.NOTICE_FOR_RENT_CHANGE,
        payload: event.target.value
    }
}

export function AddNotice(event) {

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
        type: CabinetActions.NOTICE_ADD,
        payload: {
            formIsValid,
            addedSuccessfully,
            message
        }
    }
}