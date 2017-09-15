import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../actions/LogInActionCreators'
import LogIn from '../components/LogInView'

function mapStateToProps(state) {
    return {
        logInState : state.logInState,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        LogInInit: bindActionCreators(ActionCreators.LogInInit, dispatch),
        LogIn: bindActionCreators(ActionCreators.LogIn, dispatch),
        EmailUpdate: bindActionCreators(ActionCreators.LogInEmailUpd, dispatch),
        PassUpdate: bindActionCreators(ActionCreators.LogInPassUpd, dispatch),
        ForgotPass: bindActionCreators(ActionCreators.LogInForgotPass, dispatch),
        ResetPass: bindActionCreators(ActionCreators.LogInResetPass, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
