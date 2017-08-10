import { Actions } from '../Actions'


const initialState = {
    email: '',
    password: '',
    isCanRedirect: false
};

export default function logInState(state = initialState, action) {

    switch (action.type) {
        case Actions.LOG_IN: {
            debugger;
            let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (!emailRegex.test(state.email)) {

                return Object.assign({}, state, {
                    message: 'Invalid Email!'
                });
            }
            if (state.password.length < 8) {

                return Object.assign({}, state, {
                    message: 'Password must be longer than 8 characters!'
                })
            }

            let allUsers = JSON.parse(window.sessionStorage.getItem('allUsers'));
            for(let i = 0; i < allUsers.length; i++) {
                if ((allUsers[i].email === state.email) && (allUsers[i].password === state.password)) {
                    let currentUser = allUsers[i];
                    window.sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

                    return Object.assign({}, state, {
                        email: '',
                        password: '',
                        isCanRedirect: true
                    })
                }
            }

            return Object.assign({}, state, {
                password: '',
                message: 'Invalid email or password!'
            })

        }
        case Actions.LOG_IN_EMAIL_UPDATE: {

            return Object.assign({}, state, {
                email: action.payload
            })
        }
        case Actions.LOG_IN_PASSWORD_UPDATE: {

            return Object.assign({}, state, {
                password: action.payload
            })
        }
        default:
            return state;
    }

}