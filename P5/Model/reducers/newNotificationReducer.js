import { Actions } from '../Actions'


const initialState = {
        title: '',
        description: '',
        metric: 0,
        address: '',
        price: 0,
        isForRent: false,
        proprietor: 0
};

export default function newNotificationState(state = initialState, action) {

    switch (action.type) {
        case Actions.NOTICE_SET_PROPRIETOR: {

            return Object.assign({}, state, {
                proprietor: action.payload
            })
        }
        case Actions.NOTICE_TITLE_UPDATE: {

            return Object.assign({}, state, {
                title: action.payload
            })
        }
        case Actions.NOTICE_DESCRIPTION_UPDATE: {

            return Object.assign({}, state, {
                description: action.payload
            })
        }
        case Actions.NOTICE_METRIC_UPDATE: {

            if(action.payload < 0) {
                return Object.assign({}, state, {
                    metric: 0
                })
            }
            else {
                return Object.assign({}, state, {
                    metric: action.payload
                })
            }
        }
        case Actions.NOTICE_ADDRESS_UPDATE: {

            return Object.assign({}, state, {
                address: action.payload
            })
        }
        case Actions.NOTICE_PRICE_UPDATE: {
            if(action.payload < 0) {
                return Object.assign({}, state, {
                    price: 0
                })
            }
            else {
                return Object.assign({}, state, {
                    price: action.payload
                })
            }
        }
        case Actions.NOTICE_ADD: {
            if (state.title.length === 0) {
                return Object.assign({}, state, {
                    message: 'The title can not be empty!'
                })
            }
            if (state.address.length === 0) {
                return Object.assign({}, state, {
                    message: 'The address can not be empty!'
                })
            }


            let currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));


            let allNotifications = JSON.parse(window.sessionStorage.getItem('AllNotifications'));
            allNotifications.push(state);
            window.sessionStorage.setItem('AllNotifications', JSON.stringify(allNotifications));

            debugger;

            return Object.assign({}, state, {
                message: 'Your notification is begin added!'
            })
        }
    }
    return state;
}