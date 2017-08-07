import React, {Component} from 'react'
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import RegisterForm from '../View/RegisterView'
import * as ActionCreators from '../Model/ActionCreators'
import PersonalCabinet from '../View/PersonalCabinetView'

function mapStateToProps(state) {
    return {
        currentUser : state.userInfoState,
        test: state.newUserState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        UserInit: bindActionCreators(ActionCreators.UserInit, dispatch)
    }
}

let ret = function () {
    return connect(mapStateToProps, mapDispatchToProps)(PersonalCabinet);
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCabinet);
