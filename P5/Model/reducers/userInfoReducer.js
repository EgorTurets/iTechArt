import { Actions } from '../Actions'


const initialState = {
    id: 4,
    firstName: 'Unknown',
    lastName: 'User',
    email: 'test@mail.com',
    notifications: [{
        id: 1,
        title: 'Title-1',
        description: 'blah-blah-blau',
        metric: 100,
        address: 'fhsdklnsdpgjgpf sosgl 5 lskg',
        price: 1000000
    }, {
        id: 2,
        title: 'Title-2',
        description: 'ysdf;kb sldgjlk lglrg  lg;gk;fg swghf;wfd',
        metric: 51245,
        address: 'rtynvfgf sosgl 5 lskg',
        price: 100000
    }, {
        id: 3,
        title: 'Title-3',
        description: 'blah-blah-blau',
        metric: 100,
        address: 'fhsdklnsdpgjgpf sosgl 5 lskg',
        price: 1000000
    }, {
        id: 4,
        title: 'Title-4',
        description: 'ubaba-ubaba-ubaba',
        metric: 80,
        address: 'sosgl 5 lskg',
        price: 700000
    }, {
        id: 5,
        title: 'Title-5',
        description: 'blah-blah-blau',
        metric: 7510,
        address: '124 hful sosgl 5 lskg',
        price: 652000
    }, {
        id: 6,
        title: 'Title-6',
        description: 'blah-blah-blau',
        metric: 321,
        address: 'Txr Uyt 10 Ioma',
        price: 3210000
    }],
};

export default function userInfoState(state = initialState, action) {

    switch (action.type) {
        case Actions.USER_INIT: {
            debugger;
            let userFromStorage = window.localStorage.getItem('User');
            if(userFromStorage) {

                return Object.assign({}, state, {
                    firstName: userFromStorage.firstName,
                    lastName: userFromStorage.lastName,
                    email: userFromStorage.email
                })
            }
            return state;
        }
        case Actions.USER_DELETE_NOTICE: {
            debugger;

            let indexOfElement = -1;
            for (let i = 0; i < state.notifications.length; i++) {
                if(state.notifications[i].id === +action.payload) {
                    indexOfElement = i;
                    break;
                }
            }

            if (indexOfElement === -1) {

                return state;
            }
            let notices = state.notifications;
            notices.splice(indexOfElement, 1);

            return Object.assign({}, state, {
                notifications: notices
            })
        }
    }
    return state;
}