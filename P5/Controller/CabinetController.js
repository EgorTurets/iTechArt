import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import RegisterForm from '../View/RegisterView'
import * as ActionCreators from '../Model/ActionCreators'
import PersonalCabinet from '../View/PersonalCabinetView'

function mapStateToPrors(state) {
    return {
        currentUser : state.userInfoState,
        test: state.newUserState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        TestAction: bindActionCreators(ActionCreators.TestAction, dispatch)
    }
}

let ret = function () {
    return connect(mapStateToPrors, mapDispatchToProps)(PersonalCabinet);
};

export default ret();
