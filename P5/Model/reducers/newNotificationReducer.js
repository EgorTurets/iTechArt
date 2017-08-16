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
                    metric: 0,
                    message: "Metric can not be less than 0"
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
                    price: 0,
                    message: "Price can not be less than 0"
                })
            }
            else {
                return Object.assign({}, state, {
                    price: action.payload
                })
            }
        }
        case Actions.NOTICE_FOR_RENT_CHANGE : {

            debugger;
            return Object.assign({}, state, {
                isForRent: action.payload
            })
        }
        case Actions.NOTICE_ADD: {

            if (action.payload.formIsValid === false || action.payload.addedSuccessfully === false) {
                return Object.assign({}, state, {
                    message: action.payload.message
                })
            }

            return Object.assign({}, state, {
                title: '',
                description: '',
                metric: 0,
                address: '',
                price: 0,
                isForRent: false,
                proprietor: 0,
                message: 'Your notification is begin added!'
            })
        }
    }
    return state;
}