import React from 'react'
import  {connect} from 'react-redux'
import bindActionCreators from 'redux'
import RegisterForm from '../View/RegisterView'
import * as ActionCreators from '../Model/ActionCreators'
/*import {FirstNameUpdate,
    LastNameUpdate,
    EmailUpdate,
    PasswordUpdate,
    ConfirmUpdate,
    Register} from '../Model/ActionCreators'*/

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => bindActionCreators({
        FirstNameUpdate,
        LastNameUpdate,
        EmailUpdate,
        PasswordUpdate,
        ConfirmUpdate,
        Register
    }, dispatch)
)(RegisterForm);