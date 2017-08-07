import { Actions } from '../Actions'


const initialState = {
    firstName: 'Unknown',
    lastName: 'User',
    email: 'test@mail.com',
    notifications: [],
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