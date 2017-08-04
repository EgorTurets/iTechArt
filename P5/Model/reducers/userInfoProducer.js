import { Actions } from '../Actions'


const initialState = {
    firstName: 'Unknown',
    lastName: 'User',
    email: '',
    notices: []
};

export default function userInfoState(state = initialState, action) {

    switch (action.type) {
        case Actions.TEST_ACTION: {
            debugger;
            return state;
        }
    }
    return state;
}