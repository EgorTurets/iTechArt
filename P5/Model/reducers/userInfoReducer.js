import { Actions } from '../Actions'


const initialState = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    notifications: [],
    canRedirect: false
};

export default function userInfoState(state = initialState, action) {

    switch (action.type) {
        case Actions.USER_INIT: {
            let currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));
            if(!currentUser) {

                return Object.assign({}, state, {
                    canRedirect: true
                })
            }

            let allNotifications = JSON.parse(window.sessionStorage.getItem('AllNotifications'));
            let currentUserNotifications = [];
            for (let i = 0; i < allNotifications.length; i++) {
                if(+allNotifications[i].proprietor === currentUser.id) {
                    currentUserNotifications.push(allNotifications[i])
                }
            }

            return Object.assign({}, state, {
                id: currentUser.id,
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email,
                notifications: currentUserNotifications
            })
        }
        case Actions.USER_DELETE_NOTICE: {

            let indexOfElement = -1;
            let allNotifications = JSON.parse(window.sessionStorage.getItem('AllNotifications'));
            for (let i = 0; i < allNotifications.length; i++) {
                if(allNotifications[i].id === +action.payload) {
                    indexOfElement = i;
                    break;
                }
            }
            if (indexOfElement === -1) {

                return state;
            }

            allNotifications.splice(indexOfElement, 1);
            window.sessionStorage.setItem('AllNotifications', JSON.stringify(allNotifications));

            let currentUserNotifications = [];
            for (let i = 0; i < allNotifications.length; i++) {
                if(+allNotifications[i].proprietor === state.id) {
                    currentUserNotifications.push(allNotifications[i])
                }
            }

            return Object.assign({}, state, {
                notifications: currentUserNotifications
            })
        }
    }
    return state;
}