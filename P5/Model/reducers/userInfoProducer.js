import { Actions } from '../Actions'


const initialState = {
    firstName: 'Unknown',
    lastName: 'User',
    email: 'test@mail.com',
    notifications: [{
        title: 'Title-1',
        description: 'blah-blah-blau',
        metric: 100,
        address: 'fhsdklnsdpgjgpf sosgl 5 lskg',
        price: 1000000
    }, {
        title: 'Title-2',
        description: 'ysdf;kb sldgjlk lglrg  lg;gk;fg swghf;wfd',
        metric: 51245,
        address: 'rtynvfgf sosgl 5 lskg',
        price: 100000
    }, {
        title: 'Title-3',
        description: 'blah-blah-blau',
        metric: 100,
        address: 'fhsdklnsdpgjgpf sosgl 5 lskg',
        price: 1000000
    }, {
        title: 'Title-4',
        description: 'ubaba-ubaba-ubaba',
        metric: 80,
        address: 'sosgl 5 lskg',
        price: 700000
    }, {
        title: 'Title-5',
        description: 'blah-blah-blau',
        metric: 7510,
        address: '124 hful sosgl 5 lskg',
        price: 652000
    }, {
        title: 'Title-6',
        description: 'blah-blah-blau',
        metric: 321,
        address: 'Txr Uyt 10 Ioma',
        price: 3210000
    }],
    currentPage: 1
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
    }
    return state;
}