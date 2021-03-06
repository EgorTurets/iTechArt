import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import RegisterForm from '../components/RegisterView'
import * as ActionCreators from '../actions/RegisterActionCreators'

function mapStateToProps(state) {
    return {
        newUser: state.newUserState,
        currentUser : state.userInfoState
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
