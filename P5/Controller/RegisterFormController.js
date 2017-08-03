import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import RegisterForm from '../View/RegisterView'
import * as ActionCreators from '../Model/ActionCreators'

function mapStateToPrors(state) {
    return {
        user: state.userstate
    }
}

function mapDispatchToProps(dispatch) {
    return {
        FirstNameUpdate: bindActionCreators(ActionCreators.FirstNameUpdate, dispatch),
        LastNameUpdate: bindActionCreators(ActionCreators.LastNameUpdate, dispatch),
        EmailUpdate: bindActionCreators(ActionCreators.EmailUpdate, dispatch),
        PasswordUpdate: bindActionCreators(ActionCreators.PasswordUpdate, dispatch),
        ConfirmUpdate: bindActionCreators(ActionCreators.ConfirmUpdate, dispatch),
        Register: bindActionCreators(ActionCreators.Register, dispatch)
    }
}

export default connect(mapStateToPrors, mapDispatchToProps)(RegisterForm);