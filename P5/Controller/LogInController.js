import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../Model/ActionCreators'
import LogIn from '../View/LogInView'

function mapStateToProps(state) {
    return {
        logIn : state.logInState,
        test: state.newUserState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        LogIn: bindActionCreators(ActionCreators.LogIn, dispatch),
        EmailUpdate: bindActionCreators(ActionCreators.LogInEmailUpd, dispatch),
        PassUpdate: bindActionCreators(ActionCreators.LogInPassUpd, dispatch)
    }
}

let ret = function () {
    return connect(mapStateToProps, mapDispatchToProps)(PersonalCabinet);
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
